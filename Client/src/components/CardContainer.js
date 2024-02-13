/* eslint-disable react/prop-types */
import React from "react";
import { useMemo } from "react";

const CardContainer = ({
  imageDimensions,
  imageDimensionsText,
  propTop,
  propLeft,
}) => {
  const rectangleIcon1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="w-[23.31rem] shrink-0 flex flex-row items-start justify-start relative text-left text-[1rem] text-solid-heading-dark-mode font-poppins">
      <img
        className="h-[16.25rem] w-[23.44rem] absolute my-0 mx-[!important] top-[0.19rem] left-[0.19rem] rounded-t-xl rounded-b-none object-cover z-[1]"
        alt=""
        src={imageDimensions}
        style={rectangleIcon1Style}
      />
      <div className="flex-1 rounded-xl bg-darkslategray shadow-[2px_2px_100px_rgba(0,_0,_0,_0.2)] flex flex-col items-center justify-start pt-[17.75rem] pb-[1.56rem] pr-[1.94rem] pl-[1.75rem] box-border gap-[0.75rem] max-w-full mq750:pt-[11.56rem] mq750:pb-[1.25rem] mq750:box-border">
        <div className="w-[23.31rem] h-[35.44rem] relative rounded-xl bg-darkslategray shadow-[2px_2px_100px_rgba(0,_0,_0,_0.2)] hidden max-w-full" />
        <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.31rem] pr-[0.88rem] pl-[0rem] text-center text-[1.75rem]">
          <h3 className="m-0 relative text-inherit leading-[1.63rem] font-medium font-inherit z-[1] mq450:text-[1.38rem] mq450:leading-[1.31rem]">
            Project Tile goes here
          </h3>
        </div>
        <div className="self-stretch h-[8.13rem] relative text-[1.13rem] leading-[1.63rem] font-light flex items-center z-[1]">
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.56rem]">
          <div className="flex-1 relative leading-[1.63rem] z-[1]">
            <span>Tech stack :</span>
            <span className="text-[0.88rem] font-light">
              {" "}
              HTML , JavaScript, SASS, React
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem] text-white">
          <div className="flex-1 flex flex-row items-start justify-start gap-[3rem] mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[0.63rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={imageDimensionsText}
              />
              <div className="relative [text-decoration:underline] leading-[1.63rem] z-[1]">
                Live Preview
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/akariconsgithubfill-11.svg"
              />
              <div className="relative [text-decoration:underline] leading-[1.63rem] z-[1]">
                View Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
