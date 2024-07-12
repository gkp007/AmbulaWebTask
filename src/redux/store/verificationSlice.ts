import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VerificationState {
  currentStep: number;
}

const initialState: VerificationState = {
  currentStep: 0,
};

const verificationSlice = createSlice({
  name: 'verification',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = verificationSlice.actions;
export default verificationSlice.reducer;
