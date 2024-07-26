import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const OTPInput = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = () => {
    onVerify(otp);
  };

  return (
    <div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
      <button onClick={handleSubmit}>Verify OTP</button>
    </div>
  );
};

export default OTPInput;
