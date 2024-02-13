/* eslint-disable react/prop-types */
import React from 'react'
import ContainerCard from './ContainerCard'
import CardContainer from './CardContainer'

const ProjectCard1 = () => {
  return (
    <div className='w-[76.19rem] overflow-x-auto flex flex-row flex-wrap items-start justify-start gap-[4.06rem_2.81rem] min-h-[75.31rem] max-w-full mt-[-0.19rem] pt-[0.19rem] text-center text-[1.75rem] text-solid-heading-dark-mode font-poppins mq750:gap-[4.06rem_2.81rem]'>
      <ContainerCard imageDimensions='/rectangle-8@2x.png' />
      <CardContainer
        imageDimensions='/rectangle-23@2x.png'
        imageDimensionsText='/akariconslinkchain1.svg'
      />
      <ContainerCard
        imageDimensions='/rectangle-24@2x.png'
        propTop='39.5rem'
        propLeft='-52.37rem'
      />
      <CardContainer
        imageDimensions='/rectangle-81@2x.png'
        imageDimensionsText='/akariconslinkchain-3.svg'
        propTop='-39.69rem'
        propLeft='26.63rem'
      />
      <CardContainer
        imageDimensions='/rectangle-6@2x.png'
        imageDimensionsText='/akariconslinkchain1.svg'
        propTop='-39.5rem'
        propLeft='26.44rem'
      />
      <CardContainer
        imageDimensions='/rectangle-14@2x.png'
        imageDimensionsText='/akariconslinkchain-3.svg'
        propTop='0rem'
        propLeft='0.38rem'
      />
    </div>
  )
}

export default ProjectCard1
