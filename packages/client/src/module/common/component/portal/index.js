import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const portalRoot = document.querySelector('#portal-root');

function Portal({ children }) {
  const elRef = useRef(null);

  if (!elRef.current) elRef.current = document.createElement('div');

  useEffect(() => {
    const el = elRef.current;
    portalRoot.appendChild(el);

    return () => {
      portalRoot.removeChild(el);
    };
  }, []);
  // ts-ignore
  return createPortal(children, elRef.current);
}

export default Portal;
