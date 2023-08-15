
import { variantType } from '@interfaces/ButtonVariantType'
import { ERROR, SUCCESS, WARNING } from '@interfaces/ButtonVariantTypes.constants'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
  show: boolean
  duration?: number
  setShow: React.Dispatch<React.SetStateAction<boolean | string>>
  variant?: variantType
}


const Alert = ({ children, show, setShow, duration = 4000, variant = SUCCESS }: Props) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);

  }, [show])

  let typeTW = ''

  if (variant == SUCCESS) {
    typeTW = 'text-green-700 bg-green-100'
  }

  if (variant == ERROR) {
    typeTW = 'text-red-700 bg-red-100'
  }

  if (variant == WARNING) {
    typeTW = 'text-orange-700 bg-orange-100 '
  }


  return (
    <div className={`px-4 py-3 leading-normal ${typeTW} rounded-lg`} role="alert">
      {children}
    </div>
  );
}

export default Alert;