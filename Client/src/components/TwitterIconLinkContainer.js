/* eslint-disable react/prop-types */
import React from 'react'
import { useMemo } from 'react'

const TwitterIconLinkContainer = ({
  githubIconLinkFlex,
  githubIconLinkWidth,
  propColor,
  propColor1,
  frameWithinFrameColor
}) => {
  const twitterIconLinkStyle = useMemo(() => {
    return {
      flex: githubIconLinkFlex,
      width: githubIconLinkWidth
    }
  }, [githubIconLinkFlex, githubIconLinkWidth])

  const hiStyle = useMemo(() => {
    return {
      color: propColor
    }
  }, [propColor])

  const myNameIsStyle = useMemo(() => {
    return {
      color: propColor1
    }
  }, [propColor1])

  const iBuildThingsStyle = useMemo(() => {
    return {
      color: frameWithinFrameColor
    }
  }, [frameWithinFrameColor])

  return (
    <div
      className='flex-1 flex flex-row items-end justify-between pt-[1.19rem] px-[0rem] pb-[0rem] box-border gap-[1.25rem] max-w-full text-left text-[3.63rem] text-solid-heading font-poppins lg:flex-wrap'
      style={twitterIconLinkStyle}
    >
      <div className='w-[39.75rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border min-w-[39.75rem] max-w-full lg:flex-1 mq750:min-w-full'>
        <div className='self-stretch flex flex-row items-center justify-center max-w-full'>
          <h1 className='m-0 h-[18.56rem] flex-1 relative text-inherit tracking-[-1px] leading-[4.38rem] font-bold font-inherit flex items-center max-w-full mq1050:text-[2.88rem] mq1050:leading-[3.5rem] mq450:text-[2.19rem] mq450:leading-[2.63rem]'>
            <span>
              <p className='m-0' style={hiStyle}>
                Hi 👋,
              </p>
              <p className='m-0' style={myNameIsStyle}>
                My name is
              </p>
              <p className='m-0 [background:linear-gradient(90deg,_#13b0f5_2.6%,_#e70faa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>
                Pavan MG
              </p>
              <p className='m-0' style={iBuildThingsStyle}>
                I build things for web
              </p>
            </span>
          </h1>
        </div>
      </div>
      <div className='h-[20.69rem] w-[21.81rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border min-w-[21.81rem] max-w-full lg:flex-1 mq750:min-w-full'>
        <div className='self-stretch h-[21.81rem] relative rounded-211xl shrink-0 flex items-center justify-center'>
          <img
            className='self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(1.052)] lg:self-stretch lg:w-auto'
            loading='eager'
            alt=''
            src='/50353683-1@2x.png'
          />
        </div>
      </div>
    </div>
  )
}

export default TwitterIconLinkContainer
