/* eslint-disable react/prop-types */
import React from 'react'
import FormContainer1 from './FormContainer1'
import ContainerCardFormFilter from './ContainerCardFormFilter'

const ProjectTileContainer = () => {
  return (
    <div className='w-[76rem] overflow-x-auto shrink-0 flex flex-row flex-wrap items-start justify-start gap-[4.06rem_2.72rem] min-h-[74.94rem] max-w-full mt-[-0.19rem] pt-[0.19rem] text-center text-[1.75rem] text-black font-poppins mq750:gap-[4.06rem_2.72rem]'>
      <FormContainer1 imageDimensions='/rectangle-4@2x.png' />
      <ContainerCardFormFilter
        imageDimensions='/rectangle-13@2x.png'
        productCode='/akariconslinkchain.svg'
        propWidth='23.44rem'
        propPadding='0rem 0.06rem 0rem 0rem'
        propOverflowX='unset'
        propMarginTop='unset'
        propPaddingTop='unset'
        propTop='-0.19rem'
        propLeft='0.03rem'
        propFlex='1'
        propWidth1='unset'
        propAlignSelf='stretch'
        propFlex1='1'
      />
      <ContainerCardFormFilter
        imageDimensions='/rectangle-8@2x.png'
        productCode='/akariconslinkchain-2.svg'
        propWidth='23.38rem'
        propPadding='0rem 0.06rem 0rem 0rem'
        propOverflowX='auto'
        propMarginTop='-0.19rem'
        propPaddingTop='0.19rem'
        propTop='-0.19rem'
        propLeft='26.5rem'
        propFlex='unset'
        propWidth1='23.31rem'
        propAlignSelf='unset'
        propFlex1='unset'
      />
      <FormContainer1 imageDimensions='/rectangle-12@2x.png' />
      <ContainerCardFormFilter
        imageDimensions='/rectangle-6@2x.png'
        productCode='/akariconslinkchain.svg'
        propWidth='23.31rem'
        propPadding='unset'
        propOverflowX='unset'
        propMarginTop='unset'
        propPaddingTop='unset'
        propTop='-39.69rem'
        propLeft='26.13rem'
        propFlex='1'
        propWidth1='unset'
        propAlignSelf='stretch'
        propFlex1='1'
      />
      <ContainerCardFormFilter
        imageDimensions='/rectangle-14@2x.png'
        productCode='/akariconslinkchain.svg'
        propWidth='23.31rem'
        propPadding='unset'
        propOverflowX='unset'
        propMarginTop='unset'
        propPaddingTop='unset'
        propTop='-0.19rem'
        propLeft='0.5rem'
        propFlex='1'
        propWidth1='unset'
        propAlignSelf='stretch'
        propFlex1='1'
      />
    </div>
  )
}

export default ProjectTileContainer
