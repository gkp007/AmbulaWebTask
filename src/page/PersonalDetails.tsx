import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
  firstName: string;
  middleName?: string;
  lastName?: string;
  dobYear: string;
  dobDay: string;
  dobMonth: string;
  gender: string;
  phone?: string;
  email?: string;
  address?: string;
  pincode: string;
  state?: string;
  district?: string;
}

const PersonalDetails = ({onContinue}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
    onContinue(); // Call onContinue to move to the next step
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Section one */}
          <div className="mb-6 bg-blue-100 p-4 rounded-md">
            <p className="text-xl font-semibold mb-4">Personal Details</p>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('firstName', { required: 'First Name is required' })}
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Middle Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('middleName')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('lastName')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date of Birth</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Year"
                  className="border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register('dobYear', { required: 'Year is required' })}
                />
                <input
                  type="text"
                  placeholder="Day"
                  className="border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register('dobDay', { required: 'Day is required' })}
                />
                <input
                  type="text"
                  placeholder="Month"
                  className="border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register('dobMonth', { required: 'Month is required' })}
                />
              </div>
              {errors.dobYear && <p className="text-red-500 text-xs italic">{errors.dobYear.message}</p>}
              {errors.dobDay && <p className="text-red-500 text-xs italic">{errors.dobDay.message}</p>}
              {errors.dobMonth && <p className="text-red-500 text-xs italic">{errors.dobMonth.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Gender</label>
              <select
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('gender', { required: 'Gender is required' })}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender.message}</p>}
            </div>
          </div>

          {/* Section two */}
          <div className="mb-6 bg-blue-100 p-4 rounded-md">
            <p className="text-xl font-semibold mb-4">Contact Details</p>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('phone')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('email')}
              />
            </div>
          </div>

          {/* Section three */}
          <div className="mb-6 bg-blue-100 p-4 rounded-md">
            <p className="text-xl font-semibold mb-4">Address Details</p>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('address')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Pincode</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('pincode', { required: 'Pincode is required' })}
              />
              {errors.pincode && <p className="text-red-500 text-xs italic">{errors.pincode.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">State</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('state')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">District</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('district')}
              />
            </div>
          </div>

          {/* bottom */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default PersonalDetails
