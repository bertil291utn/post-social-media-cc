
import { PRIMARY, SECONDARY, TERTIARY } from '@components/common/Button/button.helper';
import { ReactNode } from 'react';


type ButtonType = typeof PRIMARY | typeof SECONDARY | typeof TERTIARY;

const Button = ({ children, className = '', type = PRIMARY }: {
  children: ReactNode
  type?: ButtonType
  className?: string
}) => {
  const buttonClass = `${className} relative w-full p-3 border-2 rounded-md`

  if (type == PRIMARY) {
    return (
      <button type='button' className={`${buttonClass} bg-gray-600`}>
        {children}
      </button >
    )
  }

  if (type == SECONDARY) {
    return (null)
  }

  if (type == TERTIARY) {
    return (
      < button type='button' className={`${buttonClass} border-gray-300`} >
        {children}
      </button >
    )
  }
}

export default Button;