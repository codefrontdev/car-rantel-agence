import React from "react";

type ThemeButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const ThemeButton: React.FC<ThemeButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-center w-6 h-6 justify-center"
    >
      {children}
    </button>
  );
};

export default ThemeButton;
