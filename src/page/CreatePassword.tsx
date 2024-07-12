import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const CreatePassword = ({ onContinue }) => {

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [conditionsMet, setConditionsMet] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    digit: false,
    symbol: false,
    consecutive: false
  });

  const checkConditions = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[@$!%*?&]/.test(password);
    const hasConsecutiveChars = /(.)\1{2,}/.test(password);

    const conditions = {
      length: password.length >= 8,
      uppercase: hasUpperCase,
      lowercase: hasLowerCase,
      digit: hasDigit,
      symbol: hasSymbol,
      consecutive: !hasConsecutiveChars
    };

    setConditionsMet(conditions);
    return conditions;
  };

  const onSubmit = data => {
    if (data.password === data.confirmPassword) {
      setPasswordMatch(true);
      onContinue();
      navigate('/')
    } else {
      setPasswordMatch(false);
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password) {
      const currentConditions = checkConditions(password);
      const allConditionsMet = Object.values(currentConditions).every(condition => condition);
      setPasswordMatch(allConditionsMet);
    } else {
      // Reset conditions if password is empty
      setConditionsMet({
        length: false,
        uppercase: false,
        lowercase: false,
        digit: false,
        symbol: false,
        consecutive: false
      });
      setPasswordMatch(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <div>
        <p className="text-center text-2xl font-semibold mb-4 text-blue-900">Congratulations!</p>
        <img src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg" alt="pic" />
        <p className="text-center mb-4">You have successfully creted your ABHA number</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            })}
            onChange={handlePasswordChange}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${passwordMatch ? 'ring-2 ring-green-500' : 'ring-2 ring-red-500'}`}
          />
          {errors.password && errors.password.type === 'required' && (
            <span className="text-red-500 text-xs">Password is required</span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span className="text-red-500 text-xs">Password must be at least 8 characters</span>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <span className="text-red-500 text-xs">
              Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character (@$!%*?&), and no spaces.
            </span>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: true,
              validate: value => value === watch('password')
            })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
            <span className="text-red-500 text-xs">Confirm Password is required</span>
          )}
          {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
            <span className="text-red-500 text-xs">Passwords do not match</span>
          )}
        </div>
        <div className="space-y-2">
          <div className={`text-sm ${conditionsMet.length ? 'text-green-500' : 'text-red-500'}`}>
            {conditionsMet.length ? 'Password length is at least 8 characters' : 'Password must be at least 8 characters'}
          </div>
          <div className={`text-sm ${conditionsMet.uppercase ? 'text-green-500' : 'text-red-500'}`}>
            {conditionsMet.uppercase ? 'Contains at least one uppercase letter' : 'Must contain at least one uppercase letter'}
          </div>
          <div className={`text-sm ${conditionsMet.lowercase ? 'text-green-500' : 'text-red-500'}`}>
            {conditionsMet.lowercase ? 'Contains at least one lowercase letter' : 'Must contain at least one lowercase letter'}
          </div>
          <div className={`text-sm ${conditionsMet.digit ? 'text-green-500' : 'text-red-500'}`}>
            {conditionsMet.digit ? 'Contains at least one digit' : 'Must contain at least one digit'}
          </div>
          <div className={`text-sm ${conditionsMet.symbol ? 'text-green-500' : 'text-red-500'}`}>
            {conditionsMet.symbol ? 'Contains at least one symbol (@$!%*?&)' : 'Must contain at least one symbol (@$!%*?&)'}
          </div>
          <div className={`text-sm ${conditionsMet.consecutive ? 'text-green-500' : 'text-red-500'}`}>
            {conditionsMet.consecutive ? 'No more than 2 consecutive identical characters' : 'Cannot have more than 2 consecutive identical characters'}
          </div>
        </div>
        {passwordMatch && (
          <div className="text-green-500 text-sm">Passwords match and meet all criteria!</div>
        )}
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Submit</button>
      </form>
    </div>
  );
};

export default CreatePassword;
