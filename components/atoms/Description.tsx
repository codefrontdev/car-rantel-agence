import React from 'react'


export interface DescriptionProps {
    desc: string
    className?: string
}
const Description: React.FC<DescriptionProps> = ({desc, className}) => {
  return <p className={`text-sm ${className}`}>{desc}</p>;
}

export default Description