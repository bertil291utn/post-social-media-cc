

import Alert from '@components/common/Alert.component';
import { variantType } from '@interfaces/ButtonVariantType';
import { SUCCESS } from '@interfaces/ButtonVariantTypes.constants';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

interface ToastMessageProps {
  message: string;
  duration?: number;
  variant?: variantType;
}

const ToastMessage = ({ message, duration = 4000, variant = SUCCESS }: ToastMessageProps) => {
  const [showToast, setShowToast] = useState<boolean | string>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {showToast && (
        <Alert show={true} setShow={setShowToast} variant={variant} duration={duration}>
          {message}
        </Alert>
      )}
    </>
  );
};

ToastMessage.show = ({ message, duration = 4000, variant }:
  { message: string, duration?: number, variant?: variantType }
) => {
  const toastElement = <ToastMessage message={message} duration={duration} variant={variant} />;

  const container = document.getElementById('modal-app-toast');
  const root = createRoot(container!);
  root.render(toastElement)

  setTimeout(() => {
    root.unmount();
  }, duration);
};

export default ToastMessage;