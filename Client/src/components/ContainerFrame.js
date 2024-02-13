/* eslint-disable react/prop-types */
import React from 'react'
import { useMemo } from 'react'
import Basedonthegivencontext from './Basedonthegivencontext'
import DynamicComponent from './DynamicComponent'

const ContainerFrame = ({
  dimensionCode,
  imageDimensions,
  dimensionCodeImageUrl,
  dimensionCodeText,
  imageCode,
  propWidth,
  propPadding
}) => {
  const infoDesignModoComStyle = useMemo(() => {
    return {
      width: propWidth
    }
  }, [propWidth])

  const frameParentLogoStyle = useMemo(() => {
    return {
      padding: propPadding
    }
  }, [propPadding])

  return (
    <div className='self-stretch flex flex-col items-end justify-start gap-[2.63rem] max-w-full text-center text-[1.13rem] text-solid-heading font-poppins mq750:gap-[2.63rem]'>
      <div className='self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.44rem] pl-[0rem] box-border max-w-full'>
        <div className='flex-1 flex flex-row items-end justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap'>
          <img
            className='h-[3.69rem] w-[6.06rem] relative overflow-hidden shrink-0'
            alt=''
            src={dimensionCode}
          />
          <div
            className='w-[38.63rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.56rem] box-border max-w-full'
            style={infoDesignModoComStyle}
          >
            <div
              className='self-stretch flex flex-row items-end justify-start py-[0rem] pr-[0.06rem] pl-[0rem] gap-[2.06rem] mq750:flex-wrap mq750:gap-[2.06rem]'
              style={frameParentLogoStyle}
            >
              <Basedonthegivencontext />
              <div className='flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.94rem] pl-[0rem] box-border min-w-[10.25rem]'>
                <DynamicComponent />
              </div>
              <div className='h-[2rem] flex flex-row items-end justify-start gap-[1.25rem]'>
                <img
                  className='h-[1.83rem] w-[1.88rem] relative'
                  alt=''
                  src={imageDimensions}
                />
                <img
                  className='h-[1.88rem] w-[1.88rem] relative'
                  alt=''
                  src={dimensionCodeImageUrl}
                />
                <img
                  className='h-[1.88rem] w-[1.88rem] relative overflow-hidden shrink-0'
                  alt=''
                  src={dimensionCodeText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className='self-stretch h-[0.36rem] relative max-w-full overflow-hidden shrink-0 mix-blend-normal'
        loading='eager'
        alt=''
        src={imageCode}
      />
    </div>
  )
}

export default ContainerFrame
