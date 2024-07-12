import React, { useState, useRef } from 'react'



const OtpVerify = ({ onContinue }) => {
  const [otp, setOtp] = useState(Array(6).fill(''))
  const inputs = useRef<any>([])

  const handleChange = (e, index) => {
    const value = e.target.value
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Focus the next input box
      if (value && index < 5) {
        inputs.current[index + 1].focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus()
    }
  }

  const handleVerify = () => {
    if (otp.join('') === '123456') {
      alert('OTP verified successfully!')
      onContinue();

    } else {
      alert('Invalid OTP')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
        <p className="text-3xl font-semibold mb-4">OTP Verification</p>
        <p className="text-gray-600 mb-6">Please enter the 6-digit verification code sent to mobile number *******780</p>
        <img src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg" alt="otp" />
        {/* Enter otp */}
        <div className="flex justify-center mb-6 space-x-2">
          {otp.map((digit, index): any => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="border rounded w-10 h-10 text-center text-lg"
              maxLength={1}
              ref={(el) => inputs.current[index] = el}
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Verify and continue
        </button>

        {/* bottom */}
        <div className="mt-6">
          <p className="text-gray-600">Didn't receive OTP?</p>
          <button className="text-blue-500 hover:underline">Resend OTP</button>
        </div>
      </div>
    </div>
  )
}

export default OtpVerify
