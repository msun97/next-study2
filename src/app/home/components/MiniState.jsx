import React from 'react'
import Card from '@/components/card/Card'
import Image from 'next/image';
import IconBox from '@/components/icon/IconBox';

const MiniState = ({name, value, percent, since, startContent, endContent, bgColor}) => {
  return (
    <Card>
      <div className='flex gap-5 items-center w-full'>
        {/* 앞쪽 아이콘 */}
        {startContent&&<IconBox className={`w-14 h-14 ${bgColor}`}>
          {startContent}
        </IconBox>}
        {/* 텍스트 */}
        <div className='flex flex-col'>
          <span className='text-gray-400 text-sm'>{name}</span>
          <strong className='text-2xl'>{value}</strong>
          <div className="flex gap-2">
            <span className="text-secondary text-sm">{percent}</span>
            <span className="text-gray-500 text-sm">{since}</span>
          </div>
        </div>
        {/* 뒤쪽 아이콘 */}
        {endContent&&<div className="w-[50px] h-[50px] ml-auto rounded-full"><Image src={endContent} alt='usa' width={50} height={50}></Image></div>}
      </div>
    </Card>
  )};

export default MiniState