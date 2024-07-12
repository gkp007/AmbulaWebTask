import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
  identifier: string;
}


const MobileVerify = ({onContinue}) => {
  const [selectedOption, setSelectedOption] = useState<"aadhaar" | "mobile">('aadhaar')
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
    onContinue(); // Call onContinue to move to the next step
  }

  return (
    <div className="items-center bg-white">
        <div className="w-full py-4 px-12 mb-12 text-left bg-sky-100">
          <h1 className="text-5xl font-bold text-blue-700">Welcome!</h1>
          <p className="mt-2 text-md font-sans font-semibold">You are about to create your ABHA number</p>
        </div>
      <div className="flex justify-center items-center self-center bg-white shadow-md rounded-lg p-10 mx-52 ">
        <div className="flex flex-col items-center">
          <img className='h-1/2 w-1/2' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="pic_1" />
          <div className="mb-4 flex justify-between flex-row w-full text-center">
            <p
              onClick={() => setSelectedOption("aadhaar")}
              className={`w-full px-4 py-2 mr-2 cursor-pointer border-b-4 ${selectedOption === "aadhaar" ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700'} rounded hover:border-blue-500 hover:text-blue-500`}
            >
              Aadhaar
            </p>
            <p
              onClick={() => setSelectedOption("mobile")}
              className={`w-full px-4 py-2 cursor-pointer border-b-4 ${selectedOption === "mobile" ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700'} rounded hover:border-blue-500 hover:text-blue-500`}
            >
              Mobile Number
            </p>
          </div>
          <div>
            {selectedOption && (
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    {selectedOption === "aadhaar" ? "Aadhaar Number" : "Mobile Number"}
                  </label>
                  <input
                    type={selectedOption === 'mobile' ? "number" : "text"}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...register('identifier', {
                      required: `${selectedOption === "aadhaar" ? 'Aadhaar' : 'Mobile number'} is required`,
                      maxLength: { value: 10, message: 'Maximum length is 10 digits' },
                      pattern: { value: /^[0-9]+$/, message: 'Only digits are allowed' }
                    })}
                  />
                  {errors.identifier && <p className="text-red-500 text-xs italic">{errors.identifier.message}</p>}
                </div>

                <div className="mb-4">
                  <p className="text-red-600 text-xs">! To get the unique ABHA number please complete the KYC verification</p>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                  Continue
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileVerify
