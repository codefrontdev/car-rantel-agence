import React from 'react'

interface ButtonProps {
  icon?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  onClick,
  className,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex mt-10 justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 ${className}`}>
      {icon && <span className={`w-6 h-6`}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button