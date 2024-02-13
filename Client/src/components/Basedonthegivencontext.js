/* eslint-disable react/prop-types */
import React from "react";
import { useMemo } from "react";

const Basedonthegivencontext = ({
  propWidth,
  propGap,
  propColor,
  propColor1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const faPhoneStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const textInfoStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="h-[1.63rem] w-[10.63rem] flex flex-row items-center justify-center text-center text-[1.13rem] text-solid-heading font-poppins"
      style={groupDivStyle}
    >
      <div
        className="self-stretch flex-1 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.06rem] gap-[0.69rem]"
        style={groupDiv1Style}
      >
        <div
          className="h-[1.51rem] w-[0.58rem] relative leading-[2.38rem] inline-block shrink-0"
          style={faPhoneStyle}
        >
          
        </div>
        <div
          className="flex-1 relative leading-[1.03rem] font-buttons-big text-left whitespace-nowrap"
          style={textInfoStyle}
        >
          +91 12345 09876
        </div>
      </div>
    </div>
  );
};

export default Basedonthegivencontext;
