import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button className={`text-green-20 rounded-full border border-green-20 px-2 py-1 [&:hover]:opacity-80 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
