import React, { useEffect, useState } from 'react';

export default function Toast({ message, state, type }) {
  const [showToast, setShowToast] = useState(true);


  useEffect(() => {
    if (state) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000); // Le Toast disparaîtra après 2 secondes
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className={`toast toast-top toast-center ${!showToast ? 'hidden' : null}`}>
      <div className={`alert ${type}`}>
        <span> {message}</span>
      </div>
    </div>
  );
}
