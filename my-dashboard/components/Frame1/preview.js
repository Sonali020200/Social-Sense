"use client";
import React from "react";
import { useTheme } from "./context/ThemeProvider";
import styled from "styled-components";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import sunset from "../../assets/sunset.png";
import profile from "../../assets/profile.jpg"
const Screen = styled.div`
  width: 100%;
  max-width:100%;
  height: fit-content;
  background: ${({ theme }) => theme.color};
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  color: black;
  overflow-hidden;
  borderRadius:8px
`;

const Preview = () => {
  const { theme } = useTheme();

  return (
    <Screen className="h-1/2 sm:h-full">
      <div className="w-full border-slate-400 border-2 p-0 sm:p-2 rounded-md" >
        <div className="relative border-dashed p-0 sm:p-1 border-2 border-gray-400 rounded-md">
          <Image
            src={sunset}
            alt="Background Image"
            width={500}
            height={300}
            objectFit="cover"
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-4 transform translate-y-1/2 rounded-full border-dashed border-2 border-gray-400">
            <Image
              src={profile}
              alt="Profile Image"
              className="w-24 h-24 rounded-full border-4 border-white"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="pt-12 pb-6 px-4 text-left">
          <h1 className="text-2xl font-bold">Mason Parker</h1>
          <p className="text-gray-600">Graphics & UI/UX Designer</p>
          <p className="text-gray-600">Denver, United States</p>
          <p className="mt-4 p-4 rounded-lg text-gray-700 text-s border-dashed border-2 border-gray-300">
            I am a visionary Graphics and UI/UX Designer, seamlessly blending
            artistic flair with technical expertise. With a degree in Graphic
            Design, I consistently deliver visually stunning and user-centric
            solutions, leaving an indelible mark on the digital landscape. As a
            trusted collaborator, I am dedicated to crafting pixel-perfect UIs
            and captivating graphics that elevate user experiences.
          </p>
          
        </div>
      </div>
    </Screen>
  );
};

export default Preview;
