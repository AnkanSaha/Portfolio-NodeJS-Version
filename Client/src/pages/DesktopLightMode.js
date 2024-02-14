/* eslint-disable react/prop-types */
import React from 'react'
import SocialMediaLinksContainer from '../components/SocialMediaLinksContainer'
import FormContainer from '../components/FormContainer'
import ProjectCard from '../components/ProjectCard'
import ContainerFrame from '../components/ContainerFrame'

const DesktopLightMode = () => {
  return (
    <div className='w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[2.56rem] pb-[3.75rem] pr-[2rem] pl-[1.25rem] box-border gap-[8.63rem] tracking-[normal] text-center text-[3rem] text-solid-heading font-poppins lg:gap-[8.63rem] mq750:gap-[8.63rem] mq450:gap-[8.63rem]'>
      <header className='w-[77.13rem] flex flex-row items-start justify-start pt-[0rem] pb-[5.13rem] px-[0rem] box-border max-w-full shrink-0 text-center text-[1.25rem] text-dark-content font-buttons-big'>
        <div className='w-[74.56rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full'>
          <img
            className='h-[3.69rem] w-[6.06rem] relative overflow-hidden shrink-0'
            loading='eager'
            alt=''
            src='/logo-1.svg'
          />
          <div className='w-[49.38rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full mq1050:w-[0rem]'>
            <div className='self-stretch flex flex-row items-end justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] mq1050:hidden'>
              <div className='flex flex-col items-start justify-start py-[0rem] pr-[1.06rem] pl-[0rem]'>
                <div className='relative leading-[1.63rem] font-medium'>
                  Home
                </div>
              </div>
              <div className='flex flex-col items-start justify-start py-[0rem] pr-[0.81rem] pl-[0rem]'>
                <div className='relative leading-[1.63rem] font-medium'>
                  About
                </div>
              </div>
              <div className='flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]'>
                <div className='relative leading-[1.63rem] font-medium whitespace-nowrap'>
                  Tech Stack
                </div>
              </div>
              <div className='relative leading-[1.63rem] font-medium'>
                Projects
              </div>
              <div className='relative leading-[1.63rem] font-medium'>
                Contact
              </div>
              <div className='h-[2rem] flex flex-row items-end justify-start gap-[1.25rem]'>
                <img
                  className='h-[1.83rem] w-[1.88rem] relative'
                  loading='eager'
                  alt=''
                  src='/vector.svg'
                />
                <img
                  className='h-[1.88rem] w-[1.88rem] relative'
                  loading='eager'
                  alt=''
                  src='/antdesigntwittercirclefilled.svg'
                />
                <img
                  className='h-[1.88rem] w-[1.88rem] relative overflow-hidden shrink-0'
                  loading='eager'
                  alt=''
                  src='/entyposociallinkedinwithcircle.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <SocialMediaLinksContainer />
      <div className='flex flex-row items-start justify-start py-[0rem] pr-[1.44rem] pl-[0rem] box-border max-w-full shrink-0'>
        <div className='flex flex-col items-center justify-start gap-[3.06rem] max-w-full mq750:gap-[3.06rem]'>
          <div className='flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full'>
            <h1 className='m-0 relative text-inherit leading-[1.63rem] font-bold font-inherit mq1050:text-[2.38rem] mq1050:leading-[1.31rem] mq450:text-[1.81rem] mq450:leading-[1rem]'>
              My Tech Stack
            </h1>
          </div>
          <h2 className='m-0 relative text-[2rem] leading-[1.63rem] font-normal font-inherit text-dark-content mq1050:text-[1.63rem] mq1050:leading-[1.31rem] mq450:text-[1.19rem] mq450:leading-[1rem]'>
            {' '}
            Technologies I’ve been working with recently
          </h2>
        </div>
      </div>
      <section className='w-[76.13rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.38rem] box-border gap-[3.13rem] max-w-full shrink-0 mq750:gap-[3.13rem] mq450:pb-[2.19rem] mq450:box-border'>
        <div className='self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] mq750:flex-wrap mq750:justify-center'>
          <div className='flex-1 flex flex-col items-start justify-start pt-[0.56rem] px-[0rem] pb-[0rem] box-border min-w-[4.88rem]'>
            <img
              className='w-[7.5rem] h-[7.5rem] relative overflow-hidden shrink-0'
              loading='eager'
              alt=''
              src='/vscodeiconsfiletypehtml.svg'
            />
          </div>
          <div className='flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[4.88rem]'>
            <img
              className='w-[7.5rem] h-[7.44rem] relative overflow-hidden shrink-0'
              loading='eager'
              alt=''
              src='/vscodeiconsfiletypecss.svg'
            />
          </div>
          <div className='flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.19rem] pl-[0rem] box-border min-w-[5rem]'>
            <img
              className='w-[7.5rem] h-[7.5rem] relative overflow-hidden shrink-0'
              loading='eager'
              alt=''
              src='/vscodeiconsfiletypejsofficial.svg'
            />
          </div>
          <div className='h-[6.88rem] w-[8.06rem] flex flex-col items-start justify-start pt-[0.56rem] pb-[0rem] pr-[1rem] pl-[0rem] box-border'>
            <img
              className='self-stretch flex-1 relative max-w-full overflow-hidden max-h-full'
              loading='eager'
              alt=''
              src='/logosreact.svg'
            />
          </div>
          <div className='h-[6.25rem] w-[7.44rem] flex flex-col items-start justify-start py-[0rem] pr-[0.88rem] pl-[0rem] box-border'>
            <img
              className='self-stretch flex-1 relative max-w-full overflow-hidden max-h-full'
              alt=''
              src='/vector-1.svg'
            />
          </div>
          <img
            className='h-[5.44rem] w-[5.5rem] relative overflow-hidden shrink-0'
            alt=''
            src='/logosbootstrap.svg'
          />
        </div>
        <FormContainer />
      </section>
      <section className='flex flex-row items-start justify-start pt-[0rem] pb-[4.06rem] pr-[0rem] pl-[1.13rem] box-border max-w-full shrink-0 text-center text-[3rem] text-solid-heading font-poppins lg:pb-[2.63rem] lg:box-border mq750:pb-[1.69rem] mq750:box-border'>
        <div className='flex flex-col items-center justify-start gap-[6.19rem] max-w-full mq750:gap-[6.19rem] mq450:gap-[6.19rem]'>
          <div className='w-[25.13rem] flex flex-row items-start justify-start max-w-full'>
            <div className='flex flex-col items-center justify-start gap-[3.06rem] max-w-full mq450:gap-[3.06rem]'>
              <div className='w-[12.94rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.38rem] box-border'>
                <h1 className='m-0 flex-1 relative text-inherit leading-[1.63rem] font-bold font-inherit mq1050:text-[2.38rem] mq1050:leading-[1.31rem] mq450:text-[1.81rem] mq450:leading-[1rem]'>
                  Projects
                </h1>
              </div>
              <h2 className='m-0 relative text-[2rem] leading-[1.63rem] font-normal font-inherit text-dark-content mq1050:text-[1.63rem] mq1050:leading-[1.31rem] mq450:text-[1.19rem] mq450:leading-[1rem]'>
                Things I’ve built so far
              </h2>
            </div>
          </div>
          <ProjectCard />
        </div>
      </section>
      <footer className='w-[76.81rem] flex flex-row items-start justify-start py-[0rem] pr-[0.63rem] pl-[0rem] box-border max-w-full shrink-0 text-left text-[1.13rem] text-solid-heading font-buttons-big'>
        <div className='flex-1 flex flex-col items-center justify-start gap-[3.38rem] max-w-full mq750:gap-[3.38rem]'>
          <ContainerFrame
            dimensionCode='/logo-1-1.svg'
            imageDimensions='/vector-2.svg'
            dimensionCodeImageUrl='/antdesigntwittercirclefilled-1.svg'
            dimensionCodeText='/entyposociallinkedinwithcircle-1.svg'
            imageCode='/divider.svg'
          />
          <div className='self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.88rem] pl-[0.81rem] box-border gap-[1.25rem] max-w-full lg:flex-wrap'>
            <div className='w-[34.63rem] flex flex-col items-start justify-start pt-[0.38rem] px-[0rem] pb-[0rem] box-border max-w-full'>
              <div className='self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq750:flex-wrap'>
                <div className='relative leading-[1.63rem]'>Home</div>
                <div className='relative leading-[1.63rem]'>About</div>
                <div className='relative leading-[1.63rem]'>Technologies</div>
                <div className='relative leading-[1.63rem]'>Projects</div>
                <div className='relative leading-[1.63rem]'>Contact</div>
              </div>
            </div>
            <div className='relative leading-[1.63rem] font-poppins text-center inline-block mix-blend-normal max-w-full text-dark-content'>
              <span>{'Designed and built by '}</span>
              <span className='[background:linear-gradient(90deg,_#13b0f5_2.6%,_#e70faa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>
                Pavan MG
              </span>
              <span>{' with '}</span>
              <span className='[background:linear-gradient(90deg,_#13b0f5_2.6%,_#e70faa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>
                Love
              </span>
              <span>{' & '}</span>
              <span className='[background:linear-gradient(90deg,_#13b0f5_2.6%,_#e70faa)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>
                Coffee
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DesktopLightMode
