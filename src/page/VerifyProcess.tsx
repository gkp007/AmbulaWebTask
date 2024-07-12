import React from 'react'
import ProgressSteps from './ProgressSteps.tsx'
import MobileVerify from './MobileVerify.tsx'
import OtpVerify from "./OtpVerify.tsx";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from '../redux/store/verificationSlice.ts';
import { RootState } from '../redux/app/Store.ts';
import PersonalDetails from './PersonalDetails.tsx';
import AbhaAddress from './AbhaAddress.tsx';
import CreatePassword from './CreatePassword.tsx';


const VerifyProcess = () => {

  const currentStep = useSelector((state: RootState) => state.verification.currentStep);
  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(setCurrentStep(currentStep + 1));
  };
  return (
    <div>
      <div className="flex justify-center px-8 pb-5 pt-9 bg-sky-100">
        <ProgressSteps currentStep={currentStep} />
      </div>
      {currentStep === 0 && <MobileVerify onContinue={handleNextStep} />}
      {currentStep === 1 && <OtpVerify onContinue={handleNextStep} />}
      {currentStep === 2 && <PersonalDetails onContinue={handleNextStep} />}
      {currentStep === 3 && <AbhaAddress onContinue={handleNextStep} />}
      {currentStep === 4 && <CreatePassword onContinue={handleNextStep} />}
    </div>

  )
}

export default VerifyProcess
