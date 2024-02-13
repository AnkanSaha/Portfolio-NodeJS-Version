/* eslint-disable react/prop-types */
import React from "react";
import { useMemo } from "react";

const HomeContainer = ({
  frameNavigationFlex,
  frameNavigationWidth,
  frameNavigationGap,
  frameBodyHeight,
  frameBodyWidth,
  groupDivWidth,
  groupDivPadding,
  frameProjectsandContactGap,
  homeGap,
  frameProjectsandContactPadding,
  aboutFontSize,
  aboutLineHeight,
  aboutMargin,
  frameProjectsandContactPadding1,
  techStackFontSize,
  techStackLineHeight,
  techStackMargin,
  projectsPadding,
  contactFontSize,
  contactLineHeight,
  contactMargin,
  groupDivFontSize,
  groupDivLineHeight,
  groupDivMargin,
  entypoLinkedInwithCircleFontSize,
  entypoLinkedInwithCircleLineHeight,
  entypoLinkedInwithCircleMargin,
  antDesigntwitterCircleFilHeight,
  antDesigntwitterCircleFilGap,
  entypoSociallinkedinWithCHeight,
  entypoSociallinkedinWithCWidth,
  propHeight,
  propWidth,
  propHeight1,
  propWidth1,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      flex: frameNavigationFlex,
      width: frameNavigationWidth,
      gap: frameNavigationGap,
    };
  }, [frameNavigationFlex, frameNavigationWidth, frameNavigationGap]);

  const logo1IconStyle = useMemo(() => {
    return {
      height: frameBodyHeight,
      width: frameBodyWidth,
    };
  }, [frameBodyHeight, frameBodyWidth]);

  const frameNavigationStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      padding: groupDivPadding,
    };
  }, [groupDivWidth, groupDivPadding]);

  const frameBodyStyle = useMemo(() => {
    return {
      gap: frameProjectsandContactGap,
    };
  }, [frameProjectsandContactGap]);

  const groupDiv3Style = useMemo(() => {
    return {
      gap: homeGap,
    };
  }, [homeGap]);

  const frameProjectsandContactStyle = useMemo(() => {
    return {
      padding: frameProjectsandContactPadding,
    };
  }, [frameProjectsandContactPadding]);

  const homeStyle = useMemo(() => {
    return {
      fontSize: aboutFontSize,
      lineHeight: aboutLineHeight,
      margin: aboutMargin,
    };
  }, [aboutFontSize, aboutLineHeight, aboutMargin]);

  const frameProjectsandContact1Style = useMemo(() => {
    return {
      padding: frameProjectsandContactPadding1,
    };
  }, [frameProjectsandContactPadding1]);

  const aboutStyle = useMemo(() => {
    return {
      fontSize: techStackFontSize,
      lineHeight: techStackLineHeight,
      margin: techStackMargin,
    };
  }, [techStackFontSize, techStackLineHeight, techStackMargin]);

  const frameProjectsandContact2Style = useMemo(() => {
    return {
      padding: projectsPadding,
    };
  }, [projectsPadding]);

  const techStackStyle = useMemo(() => {
    return {
      fontSize: contactFontSize,
      lineHeight: contactLineHeight,
      margin: contactMargin,
    };
  }, [contactFontSize, contactLineHeight, contactMargin]);

  const projectsStyle = useMemo(() => {
    return {
      fontSize: groupDivFontSize,
      lineHeight: groupDivLineHeight,
      margin: groupDivMargin,
    };
  }, [groupDivFontSize, groupDivLineHeight, groupDivMargin]);

  const contactStyle = useMemo(() => {
    return {
      fontSize: entypoLinkedInwithCircleFontSize,
      lineHeight: entypoLinkedInwithCircleLineHeight,
      margin: entypoLinkedInwithCircleMargin,
    };
  }, [
    entypoLinkedInwithCircleFontSize,
    entypoLinkedInwithCircleLineHeight,
    entypoLinkedInwithCircleMargin,
  ]);

  const groupDiv4Style = useMemo(() => {
    return {
      height: antDesigntwitterCircleFilHeight,
      gap: antDesigntwitterCircleFilGap,
    };
  }, [antDesigntwitterCircleFilHeight, antDesigntwitterCircleFilGap]);

  const entypoLinkedInwithCircleStyle = useMemo(() => {
    return {
      height: entypoSociallinkedinWithCHeight,
      width: entypoSociallinkedinWithCWidth,
    };
  }, [entypoSociallinkedinWithCHeight, entypoSociallinkedinWithCWidth]);

  const antDesigntwitterCircleFillIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const entypoSociallinkedinWithCiIconStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
    };
  }, [propHeight1, propWidth1]);

  return (
    <div
      className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-center text-[1.25rem] text-dark-content font-buttons-big"
      style={groupDiv2Style}
    >
      <img
        className="h-[3.69rem] w-[6.06rem] relative overflow-hidden shrink-0"
        loading="eager"
        alt=""
        src="/logo-1.svg"
        style={logo1IconStyle}
      />
      <div
        className="w-[49.38rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full"
        style={frameNavigationStyle}
      >
        <div
          className="self-stretch flex flex-row items-end justify-start gap-[3.19rem] max-w-full mq450:gap-[3.19rem]"
          style={frameBodyStyle}
        >
          <div
            className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1050:hidden"
            style={groupDiv3Style}
          >
            <div
              className="flex flex-col items-start justify-start py-[0rem] pr-[1.06rem] pl-[0rem]"
              style={frameProjectsandContactStyle}
            >
              <div
                className="relative leading-[1.63rem] font-medium"
                style={homeStyle}
              >
                Home
              </div>
            </div>
            <div
              className="flex flex-col items-start justify-start py-[0rem] pr-[0.81rem] pl-[0rem]"
              style={frameProjectsandContact1Style}
            >
              <div
                className="relative leading-[1.63rem] font-medium"
                style={aboutStyle}
              >
                About
              </div>
            </div>
            <div
              className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]"
              style={frameProjectsandContact2Style}
            >
              <div
                className="relative leading-[1.63rem] font-medium whitespace-nowrap"
                style={techStackStyle}
              >
                Tech Stack
              </div>
            </div>
            <div
              className="relative leading-[1.63rem] font-medium"
              style={projectsStyle}
            >
              Projects
            </div>
            <div
              className="relative leading-[1.63rem] font-medium"
              style={contactStyle}
            >
              Contact
            </div>
          </div>
          <div
            className="h-[2rem] flex flex-row items-end justify-start gap-[1.25rem]"
            style={groupDiv4Style}
          >
            <img
              className="h-[1.83rem] w-[1.88rem] relative"
              loading="eager"
              alt=""
              src="/vector.svg"
              style={entypoLinkedInwithCircleStyle}
            />
            <img
              className="h-[1.88rem] w-[1.88rem] relative"
              loading="eager"
              alt=""
              src="/antdesigntwittercirclefilled.svg"
              style={antDesigntwitterCircleFillIconStyle}
            />
            <img
              className="h-[1.88rem] w-[1.88rem] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/entyposociallinkedinwithcircle.svg"
              style={entypoSociallinkedinWithCiIconStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
