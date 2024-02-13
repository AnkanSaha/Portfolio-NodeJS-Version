/* eslint-disable react/prop-types */
import React from "react";

const FormContainer = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between py-[0rem] pr-[0.13rem] pl-[0rem] gap-[1.25rem] mq1050:flex-wrap mq1050:justify-center">
      <div className="flex flex-col items-start justify-start pt-[1.06rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[8.19rem] h-[8.19rem] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/vscodeiconsfiletypetailwind.svg"
        />
      </div>
      <div className="h-[6.5rem] w-[8.5rem] flex flex-col items-start justify-start pt-[1.06rem] pb-[0rem] pr-[1.19rem] pl-[0rem] box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
          loading="eager"
          alt=""
          src="/logossass.svg"
        />
      </div>
      <img
        className="h-[6.56rem] w-[6.56rem] relative overflow-hidden shrink-0"
        loading="eager"
        alt=""
        src="/logosgiticon.svg"
      />
      <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.44rem] pl-[0rem]">
        <img
          className="w-[7.5rem] h-[7.5rem] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/cibgreensock.svg"
        />
      </div>
      <div className="h-[9.25rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
        <img
          className="w-[7rem] h-[7rem] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/vscodeiconsfiletypevscode.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.25rem]">
        <img
          className="w-[5.5rem] h-[5.5rem] relative overflow-hidden shrink-0"
          alt=""
          src="/akariconsgithubfill.svg"
        />
      </div>
    </div>
  );
};

export default FormContainer;
