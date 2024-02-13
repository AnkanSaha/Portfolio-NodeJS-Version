import React from "react";
import HomeContainer from "../components/HomeContainer";

import TwitterIconLinkContainer from "../components/TwitterIconLinkContainer";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[4.88rem] pb-[18.19rem] pr-[3.25rem] pl-[1.25rem] box-border gap-[15.38rem] tracking-[normal] lg:gap-[15.38rem] lg:pr-[1.63rem] lg:box-border mq450:gap-[15.38rem] mq750:gap-[15.38rem]">
      <header className="w-[75.25rem] flex flex-row items-start justify-start py-[0rem] pr-[0.69rem] pl-[0rem] box-border max-w-full">
        <HomeContainer />
      </header>
      <TwitterIconLinkContainer
        githubIconLinkFlex="unset"
        githubIconLinkWidth="75.25rem"
        propColor="#42446e"
        propColor1="#42446e"
        frameWithinFrameColor="#42446e"
      />
    </div>
  );
};

export default Desktop;
