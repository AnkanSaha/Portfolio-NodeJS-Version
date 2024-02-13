/* eslint-disable react/prop-types */
import React from 'react'
import HomeContainer from '../components/HomeContainer'
import ProjectTileContainer from '../components/ProjectTileContainer'

const Desktop4 = () => {
  return (
    <div className='w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[4.19rem] pb-[8.5rem] pr-[1.25rem] pl-[3.56rem] box-border gap-[7.13rem] tracking-[normal] lg:pl-[1.75rem] lg:box-border mq450:gap-[7.13rem] mq750:gap-[7.13rem]'>
      <header className='w-[76.94rem] flex flex-row items-start justify-start pt-[0rem] pb-[2.88rem] pr-[2.38rem] pl-[0rem] box-border max-w-full'>
        <HomeContainer
          frameNavigationFlex='1'
          frameNavigationWidth='unset'
          frameNavigationGap='1.25rem'
          frameBodyHeight='3.69rem'
          frameBodyWidth='6.06rem'
          groupDivWidth='49.38rem'
          groupDivPadding='0.25rem 0rem 0rem'
          frameProjectsandContactGap='3.19rem'
          homeGap='1.25rem'
          frameProjectsandContactPadding='0rem 1.06rem 0rem 0rem'
          aboutFontSize='1.25rem'
          aboutLineHeight='1.63rem'
          aboutMargin='unset'
          frameProjectsandContactPadding1='0rem 0.81rem 0rem 0rem'
          techStackFontSize='1.25rem'
          techStackLineHeight='1.63rem'
          techStackMargin='unset'
          projectsPadding='0rem 0.25rem 0rem 0rem'
          contactFontSize='1.25rem'
          contactLineHeight='1.63rem'
          contactMargin='unset'
          groupDivFontSize='1.25rem'
          groupDivLineHeight='1.63rem'
          groupDivMargin='unset'
          entypoLinkedInwithCircleFontSize='1.25rem'
          entypoLinkedInwithCircleLineHeight='1.63rem'
          entypoLinkedInwithCircleMargin='unset'
          antDesigntwitterCircleFilHeight='2rem'
          antDesigntwitterCircleFilGap='1.25rem'
          entypoSociallinkedinWithCHeight='1.83rem'
          entypoSociallinkedinWithCWidth='1.88rem'
          propHeight='1.88rem'
          propWidth='1.88rem'
          propHeight1='1.88rem'
          propWidth1='1.88rem'
        />
      </header>
      <section className='w-[75.06rem] flex flex-row items-start justify-start max-w-full text-center text-[2.63rem] text-solid-heading font-poppins'>
        <div className='flex flex-col items-start justify-start gap-[2rem]'>
          <h1 className='m-0 relative text-inherit leading-[1.63rem] font-bold font-inherit mq450:text-[1.56rem] mq450:leading-[1rem] mq1050:text-[2.13rem] mq1050:leading-[1.31rem]'>
            Projects
          </h1>
          <div className='relative text-[1.25rem] leading-[1.63rem] text-dark-content mq450:text-[1rem] mq450:leading-[1.31rem]'>
            Things I’ve built so far
          </div>
        </div>
      </section>
      <section className='flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.94rem] box-border max-w-full'>
        <ProjectTileContainer />
      </section>
    </div>
  )
}

export default Desktop4
