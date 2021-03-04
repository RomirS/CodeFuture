import { useState, useEffect } from 'react';

const useOutsideMouse = (ref) => {
  const [clickedOut, setClickedOut] = useState(false);

  useEffect(() => {
    const checkClick = e => {
      if (ref.current && !ref.current.contains(e.target)) setClickedOut(true);
    };

    window.addEventListener('mousedown', checkClick);

    return () => window.removeEventListener('mousedown', checkClick);
  }, [ref]);

  return [clickedOut, setClickedOut];
}

export default useOutsideMouse;