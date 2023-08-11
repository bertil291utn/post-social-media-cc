import { ReactNode } from 'react';

const Card = ({ children, className, centerAligned = true, fullHeight = true }:
  {
    children: ReactNode
    className?: string
    centerAligned?: boolean
    fullHeight?: boolean
  }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md  p-5 w-1/3 
    ${className || ''} 
    ${centerAligned ? 'flex justify-items-center items-center' : ''}
    ${fullHeight ? 'h-1/4' : ''}
    `}>
      {children}
    </div>);
}

export default Card;