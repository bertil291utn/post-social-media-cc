
import { PRIMARY, SECONDARY, TERTIARY } from '@components/common/Button/button.helper';
import { COLOR } from 'constants/colors.contants';
import { ButtonHTMLAttributes, ReactNode } from 'react';


type ButtonType = typeof PRIMARY | typeof SECONDARY | typeof TERTIARY;

const Button = ({ children, onClick, className = '', buttonType = PRIMARY, type = 'button' }: {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  buttonType?: ButtonType
  className?: string
}) => {
  const buttonClass = `${className} relative w-full p-3 border-2 rounded-md`

  if (buttonType == PRIMARY) {
    return (
      <button
        onClick={onClick}
        type={type} className={`${buttonClass} ${COLOR.primary.bg}`}>
        {children}
      </button >
    )
  }

  if (buttonType == SECONDARY) {
    return (
      <button
        onClick={onClick}
        type={type} className={`${buttonClass}`}>
        {children}
      </button >

    )
  }

  if (buttonType == TERTIARY) {
    return (
      <button
        onClick={onClick}
        type={type} className={`${buttonClass} border-gray-300`} >
        {children}
      </button >
    )
  }
}

export default Button;