import React from 'react';
import { useForm } from 'react-hook-form';

const suggestions: string[] = [
  'gfjadfh12423',
  'shkfgksj342',
  // Add more suggestions as needed
];

type FormData = {
  abhaAddress: string;
};

type Props = {
  onContinue: () => void;
};

const AbhaAddress: React.FC<Props> = ({ onContinue }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    onContinue();
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setValue('abhaAddress', suggestion);
  };

  return (
    <div className="flex items-center justify-center bg-white mt-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <p className="text-center text-2xl font-semibold mb-4 text-blue-900">Congratulations!</p>
        <img src="https://img.freepik.com/free-vector/check-mark-shield-gradient_78370-4409.jpg" alt="pic" />
        <p className="text-center mb-4">You have successfully created your ABHA number</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <label htmlFor="abhaAddress" className="block mb-1">Create Your ABHA address</label>
            <div className="flex items-center">
              <input
                type="text"
                {...register('abhaAddress', { required: 'ABHA address is required' })}
                placeholder="Enter ABHA address.."
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:border-blue-500"
              />
              <span className="bg-gray-200 text-gray-500 px-3 py-2 rounded-r-md">@abdm</span>
            </div>
            {errors.abhaAddress && <p className="text-red-500 text-xs italic">{errors.abhaAddress.message}</p>}
            <div className="flex py-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSuggestionSelect(suggestion)}
                  className="px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md ml-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 mt-4">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default AbhaAddress;
