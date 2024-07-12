import React from 'react';

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {

  return (
    <div className="flex justify-between items-center w-[70%] px-4 mb-8">
      <div className="flex flex-col items-center py-3 flex-1">
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <circle r="10" cx="12" cy="12" fill={`${0 <= currentStep ? '#001c99' : '#5c5c5c'}`} />
        </svg>
        <div className="mt-5 absolute">
          <span className={`text-xs font-bold ${0 <= currentStep ? 'text-blue-900' : 'text-gray-300'}`}>
            Phone number
          </span>
        </div>
      </div>
      <div className={`h-0.5 flex-1 ${2 <= currentStep ? 'bg-blue-900' : 'bg-gray-300'}`} />
      <div className="flex flex-col items-center py-3 flex-1">
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <circle r="10" cx="12" cy="12" fill={`${2 <= currentStep ? '#001c99' : '#5c5c5c'}`} />
        </svg>
        <div className="mt-5 absolute">
          <span className={`text-xs font-bold ${3 <= currentStep ? 'text-blue-900' : 'text-gray-300'}`}>
            Personal Details
          </span>
        </div>
      </div>
      <div className={`h-0.5 flex-1 ${3 <= currentStep ? 'bg-blue-900' : 'bg-gray-300'}`} />
      <div className="flex flex-col items-center py-3 flex-1">
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <circle r="10" cx="12" cy="12" fill={`${3 <= currentStep ? '#001c99' : '#5c5c5c'}`} />
        </svg>
        <div className="mt-5 absolute">
          <span className={`text-xs font-bold ${4 <= currentStep ? 'text-blue-900' : 'text-gray-300'}`}>
            ABHA Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
