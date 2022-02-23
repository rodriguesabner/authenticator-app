import React, {useEffect, useState} from 'react';
import DeleteProvider from './DeleteProvider';
import DetailProvider from './DetailProvider';
import SuccessDeleteProvider from './SuccessDelete';

const ViewProvider = ({route, navigation}) => {
  const [step, setStep] = useState(0);
  const [otpData, setOtpData] = useState({});

  useEffect(() => {
    if (route.params) {
      const data = route.params;
      setOtpData(data);
    }

    return () => {};
  }, [route.params]);

  const goToHome = () => {
    navigation.goBack();
  };

  const goToNextStep = () => {
    setStep(step => step + 1);
  };

  const goToBackStep = () => {
    setStep(step => step - 1);
  };

  return step === 0 ? (
    <DetailProvider
      otpData={otpData}
      goToHome={goToHome}
      goNext={goToNextStep}
    />
  ) : step === 1 ? (
    <DeleteProvider
      otpData={otpData}
      goBack={goToBackStep}
      goNext={goToNextStep}
    />
  ) : (
    <SuccessDeleteProvider otpData={otpData} goBack={goToBackStep} />
  );
};

export default ViewProvider;
