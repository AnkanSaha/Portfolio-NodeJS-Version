/* eslint-disable react/prop-types */
import React from 'react'
import { useMemo } from 'react'

const DynamicComponent = ({ propColor, propColor1 }) => {
  const faEnvelopeStyle = useMemo(() => {
    return {
      color: propColor
    }
  }, [propColor])

  const infodesignmodocomStyle = useMemo(() => {
    return {
      color: propColor1
    }
  }, [propColor1])

  return (
    <div className='self-stretch h-[1.63rem] flex flex-row items-center justify-center text-center text-[1.13rem] text-solid-heading font-poppins'>
      <div className='self-stretch flex-1 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.06rem] gap-[0.88rem]'>
        <div
          className='h-[1.51rem] w-[1.01rem] relative leading-[2.38rem] inline-block shrink-0'
          style={faEnvelopeStyle}
        >
          
        </div>
        <div
          className='flex-1 relative leading-[1.03rem] font-buttons-big text-left whitespace-nowrap'
          style={infodesignmodocomStyle}
        >
          info@example.com
        </div>
      </div>
    </div>
  )
}

export default DynamicComponent
