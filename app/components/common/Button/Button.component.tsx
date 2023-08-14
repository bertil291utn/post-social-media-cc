
import { PRIMARY, SECONDARY, TERTIARY } from '@components/common/Button/button.helper';
import { COLOR } from 'constants/colors.contants';
import { ReactNode } from 'react';


type ButtonType = typeof PRIMARY | typeof SECONDARY | typeof TERTIARY;

const Button = ({ children, onClick, className = '', type = PRIMARY }: {
  children: ReactNode
  onClick: () => void
  type?: ButtonType
  className?: string
}) => {
  const buttonClass = `${className} relative w-full p-3 border-2 rounded-md`

  if (type == PRIMARY) {
    return (
      <button
        onClick={onClick}
        type='button' className={`${buttonClass} ${COLOR.primary.bg}`}>
        {children}
      </button >
    )
  }

  if (type == SECONDARY) {
    return (
      <button
        onClick={onClick}
        type='button' className={`${buttonClass}`}>
        {children}
      </button >

    )
  }

  if (type == TERTIARY) {
    return (
      <button
        onClick={onClick}
        type='button' className={`${buttonClass} border-gray-300`} >
        {children}
      </button >
    )
  }
}

export default Button;