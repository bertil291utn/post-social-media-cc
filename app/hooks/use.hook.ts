import { useState, useEffect } from 'react';

export default function useOutsideElement(ref: any) {
  const [IsOutsideElement, setIsOutsideElement] = useState<boolean>();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutsideElement(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return [IsOutsideElement];
}
