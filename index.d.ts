declare module 'react-native-vibration-feedback' {
  export interface RNVibrationFeedbackModule {
    vibrateWith(id: number): void;
  }
  const RNVibrationFeedback: RNVibrationFeedbackModule;
  export default RNVibrationFeedback;
}