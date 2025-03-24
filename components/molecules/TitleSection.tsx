import React from 'react'
import Title, { TitleProps } from '../atoms/Title'
import Description, { DescriptionProps } from '../atoms/Description'


interface Props {
    title: string;
    desc: string;
    titleClass?: string;
    descClass?: string
}
const TitleSection: React.FC<Props> = ({title, desc, titleClass, descClass}) => {
  return (
    <div className='flex flex-col gap-2'>
        <Title title={title} className={titleClass} />
        <Description desc={desc} className={descClass} />
    </div>
  )
}

export default TitleSection