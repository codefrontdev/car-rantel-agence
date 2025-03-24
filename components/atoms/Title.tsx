/** @format */

import React from "react";

export interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return <h2 className={className}>{title}</h2>;
};

export default Title;
