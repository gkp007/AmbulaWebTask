import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData = [
    {
      question: 'How do I create an ABHA ID?',
      answer: 'To create an ABHA ID, you can download the Ambula app and follow the step-by-step instructions. You will be required to provide basic information such as your name, contact details, and demographic data.',
    },
    {
      question: 'Can I create an ABHA account without an Aadhaar number or any other form of government-issued identification?',
      answer: 'Yes, you can create an ABHA address (name@abdm) without an Aadhaar number or any other form of government-issued identification, by using your mobile number. To do this, simply visit the Ambula Website or Download the Ambula app and follow the instructions.',
    },
    {
      question: 'Can I update or modify my information in my ABHA ID?',
      answer: 'No, you cannot modify the information in your ABHA ID as it is linked to your Aadhaar ID. However, you can update and modify your information in your ABHA address by logging into your account and accessing the profile settings on our app.',
    },
    {
      question: 'Can I import my existing health records into Ambula?',
      answer: 'Yes, Ambula allows you to import your existing health records, making it easy to have all your information in one place. There is no limit to the number of health records you can store on Ambula.',
    },
    {
      question: 'Can I request my health records from healthcare providers directly through Ambula?',
      answer: 'Yes, Ambula facilitates requesting your health records directly from healthcare providers. To do this, simply navigate to the \'Health Records\' tab in the Ambula app and tap on the \'Request Health Records\' option. Select the healthcare provider from whom you want to request your records and enter the necessary details. Your records will be shared with you securely through the Ambula app.',
    },
  ];

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div>
      {/* nav */}
      <nav className="bg-white shadow-md py-3 px-4 flex items-center justify-between mb-7 ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2791/2791163.png"
          alt="logo"
          className="h-14 w-14 cursor-pointer"
          onClick={() => navigate('/')}

        />
        <p
          onClick={() => navigate('/verify')}
          className="cursor-pointer text-blue-500 font-semibold hover:text-blue-700 transition duration-200 bg-blue-100 p-3 rounded-md shadow-lg"
        >
          Register
        </p>
      </nav>


      <div className='flex flex-row items-center justify-around'>
        <img className='w-1/2' src='https://ambula.app/assets/vector-img-hero-ffb5d240.svg' alt="covid_bg_dark" />
        <div>
          <h1 className='text-4xl font-extrabold font-Inter text-slate-500 left-1/2'>Digitize your..</h1>
          <h1 className='text-3xl font-bold font-Inter text-pink-800 left-1/2'>Health Identity</h1>
          <h1 className='text-lg font-medium font-Inter text-slate-800 left-1/2'>Join the Healthcare Revolution in India: Empowering You with Easy-to-Use Services for a Healthier Future.</h1>

        </div>
      </div>

      {/* body */}
      <div className="flex bg-white py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* box 1 */}
          <div className="bg-white p-4 rounded shadow border border-teal-200">
            <p className='text-teal-700 font-bold text-lg py-1'>Anxious, Stressed or Feeling Low?</p>
            <p className='text-teal-800 font-semibold text-sm py-1'>If anything troubles you, we're here to help</p>
            <p className='text-teal-900 font-semibold text-lg py-2'>Get a <span className='text-teal-950 underline font-extrabold font-sans'>Free Consultation</span> with a Therapist who gets you</p>
            <div className='bg-teal-50 p-3 rounded-md'>
              <p>Offering Therapy for Everyone</p>
              <p className='p-2 bg-white border border-neutral-700 rounded-md w-fit font-semibold my-2'>Know More</p>
            </div>
          </div>
          {/* box 2 */}
          <div className="bg-sky-50 p-4 rounded shadow border border-blue-200">
            <p className='text-blue-700 font-bold text-lg py-1'>Looking for Elderly Home Care services?</p>
            <p className='text-blue-800 font-semibold text-sm py-1'>We at Helpee got you covered...</p>
            <p className='text-blue-900 font-semibold text-lg py-2'>Get the Best Elder Care Services at Home</p>
            <div className='bg-sky-100 p-3 rounded-md shadow-sm'>
              <p>Trusted by 1000+ Families</p>
              <p className='p-2 bg-white border border-neutral-700 rounded-md w-fit font-semibold my-2'>Know More</p>
            </div>
          </div>
          {/* box 3 */}
          <div className="bg-white p-4 rounded shadow border border-pink-200">
            <p className='text-pink-700 font-bold text-lg py-1'>Prioritizing Women's Health</p>
            <p className='text-pink-800 font-semibold text-sm py-1'>Get a <span className='text-pink-900 underline font-extrabold'>Free Consultation</span> & book Healthcare Plan</p>
            <p className='text-pink-900 font-semibold text-lg py-2'>Trusted by 60,000+ women</p>
            <div className='bg-pink-50 p-3 rounded-md'>
              <p>Claim now</p>
              <p className='p-2 bg-white border border-neutral-700 rounded-md w-fit font-semibold my-2'>Know More</p>
            </div>
          </div>
          {/* box 4 */}
          <div className="bg-white p-4 rounded shadow border border-green-200">
            <p className='text-green-700 font-bold text-lg py-1'>Know more about ABHA</p>
            <p className='text-green-800 font-semibold text-sm py-1'>Securely manage health data and access India's digital health ecosystem easily.</p>
            <div className='bg-green-50 p-3 rounded-md'>
              <p className='text-green-900 font-semibold text-lg py-2'>Know more</p>
              <p className='p-2 bg-white border border-neutral-700 rounded-md w-fit font-semibold my-2'>Find Out More</p>
            </div>
          </div>
          {/* box 5 */}
          <div className="bg-white p-4 rounded shadow border border-orange-200">
            <p className='text-orange-700 font-bold text-lg py-1'><span className='text-orange-900 underline font-extrabold'>Free</span> consultation with Diabetologist</p>
            <p className='text-orange-800 font-semibold text-sm py-1'>Become Diabetes Free with Witn Health</p>
            <p className='text-orange-900 font-semibold text-lg py-2'>21,000+ successful diabetes reversals</p>
            <div className='bg-orange-50 p-3 rounded-md'>
              <p>Know More</p>
              <p className='p-2 bg-white border border-neutral-700 rounded-md w-fit font-semibold my-2'>Learn More</p>
            </div>
          </div>
          {/* box 6 */}
          <div className="bg-white p-4 rounded shadow border border-purple-200">
            <p className='text-purple-700 font-bold text-lg py-1'>Buy Health Insurance</p>
            <p className='text-purple-800 font-semibold text-sm py-1'>Secure your health with ease! Purchase health insurance directly from our trusted partners.</p>
            <div className='bg-purple-100 p-3 rounded-md'>
              <p className='text-purple-900 font-semibold text-lg py-2'>Know more</p>
              <p className='p-2 bg-white border border-neutral-700 rounded-md w-fit font-semibold my-2'>Explore Options</p>
            </div>
          </div>
        </div>
      </div>


      {/* faq */}
      <p className='text-5xl text-center'>Frequently Asked Questions</p>
      <div className="max-w-screen-lg mx-auto my-8 p-4">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left p-4 bg-teal-900 text-white font-bold rounded-md shadow-md focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-teal-100 rounded-md text-slate-900 border border-teal-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* footer */}
      <footer className="bg-gray-100 py-10 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-lg font-semibold">Contact us</h2>
              <p className="mt-2">Ambula Technologies Private Limited</p>
              <p>116, IIT Bhubaneswar Research & Entrepreneurship Park,</p>
              <p>Gajapati Nagar, Bhubaneswar Odisha - 751013</p>
              <p>CIN: U72900OR2023PTC041821</p>
              <p>Email: <a href="mailto:support@ambula.app" className="text-blue-500 hover:underline">support@ambula.app</a></p>
              <p>Phone: <a href="tel:+918969744343" className="text-blue-500 hover:underline">+91-8969744343</a></p>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:mr-8">
                <h2 className="text-lg font-semibold">Product</h2>
                <ul className="mt-2 space-y-2">
                  <li><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>
                  <li><a href="/about" className="text-gray-700 hover:text-blue-500">About</a></li>
                  <li><a href="/create-abha" className="text-gray-700 hover:text-blue-500">Create Abha</a></li>
                  <li><a href="/ambula" className="text-gray-700 hover:text-blue-500">Ambula</a></li>
                  <li><a href="/blogs" className="text-gray-700 hover:text-blue-500">Blogs</a></li>
                  <li><a href="/careers" className="text-gray-700 hover:text-blue-500">Careers</a></li>
                  <li><a href="/terms" className="text-gray-700 hover:text-blue-500">T&C</a></li>
                  <li><a href="/privacy-policy" className="text-gray-700 hover:text-blue-500">Privacy Policy</a></li>
                  <li><a href="/google-api-disclosure" className="text-gray-700 hover:text-blue-500">Google Api Disclosure</a></li>
                  <li><a href="/security" className="text-gray-700 hover:text-blue-500">Security</a></li>
                  <li><a href="/cancellation-refund-policy" className="text-gray-700 hover:text-blue-500">Cancellation and Refund Policy</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Quick links</h2>
                <ul className="mt-2 space-y-2">
                  <li><a href="/abdm" className="text-gray-700 hover:text-blue-500">ABDM</a></li>
                  <li><a href="/nha" className="text-gray-700 hover:text-blue-500">NHA</a></li>
                  <li><a href="/scan-share" className="text-gray-700 hover:text-blue-500">Scan & Share</a></li>
                  <li><a href="/download" className="text-gray-700 hover:text-blue-500">Download the App</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-4 text-center">
            <p className="text-sm text-gray-600">© Ambula Technologies Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
