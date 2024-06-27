"use client";

import React, { useEffect } from "react";
import { useTheme } from "./context/ThemeProvider";
import { Radio_Canada } from "next/font/google";

const solids = [
  { name: "Black", color: "#000000" },
  { name: "White", color: "#FFFFFF" },
  { name: "Light Green", color: "#C1E1C1" },
  { name: "Light Yellow", color: "#F3E5AB" },
  { name: "Light Blue", color: "#ADD8E6" },
  { name: "Light Coral", color: "#F08080" },
  { name: "Pink", color: "#FFB6C1" },
  { name: "Light Purple", color: "#D1C4E9" },
];

const linearGradients = [
  {
    name: "Gradient 1",
    gradient: "linear-gradient(to right, #A1C4FD, #C2E9FB)",
  },
  {
    name: "Gradient 2",
    gradient: "linear-gradient(to right, #76B852, #8DC26F)",
  },
  {
    name: "Gradient 3",
    gradient: "linear-gradient(to right, #6A11CB, #2575FC)",
  },
  {
    name: "Gradient 4",
    gradient: "linear-gradient(to right, #30CFD0, #330867)",
  },
  {
    name: "Gradient 5",
    gradient: "linear-gradient(to right, #FFDEE9, #B5FFFC)",
  },
  {
    name: "Gradient 6",
    gradient: "linear-gradient(to right, #FF9A8B, #FF6A88, #FF99AC)",
  },
  {
    name: "Gradient 7",
    gradient: "linear-gradient(to right, #92FE9D, #00C9FF)",
  },
  {
    name: "Gradient 8",
    gradient: "linear-gradient(to right, #F3E5AB, #FF512F)",
  },
  {
    name: "Gradient 9",
    gradient: "linear-gradient(to right, #00F260, #0575E6)",
  },
  {
    name: "Gradient 10",
    gradient: "linear-gradient(to right, #8EC5FC, #E0C3FC)",
  },
];

const radialGradients = [
  {
    name: "Radial Gradient 1",
    gradient: "radial-gradient(circle, #A1C4FD, #C2E9FB)",
  },
  {
    name: "Radial Gradient 2",
    gradient: "radial-gradient(circle, #76B852, #8DC26F)",
  },
  {
    name: "Radial Gradient 3",
    gradient: "radial-gradient(circle, #6A11CB, #2575FC)",
  },
  {
    name: "Radial Gradient 4",
    gradient: "radial-gradient(circle, #30CFD0, #330867)",
  },
  {
    name: "Radial Gradient 5",
    gradient: "radial-gradient(circle, #FFDEE9, #B5FFFC)",
  },
  {
    name: "Radial Gradient 6",
    gradient: "radial-gradient(circle, #FF9A8B, #FF6A88, #FF99AC)",
  },
  {
    name: "Radial Gradient 7",
    gradient: "radial-gradient(circle, #92FE9D, #00C9FF)",
  },
  {
    name: "Radial Gradient 8",
    gradient: "radial-gradient(circle, #F3E5AB, #FF512F)",
  },
  {
    name: "Radial Gradient 9",
    gradient: "radial-gradient(circle, #00F260, #0575E6)",
  },
  {
    name: "Radial Gradient 10",
    gradient: "radial-gradient(circle, #8EC5FC, #E0C3FC)",
  },
];

const ThemeSelector = () => {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setTheme({ color: "#FFFFFF" });
  }, []);

  const handleColorChange = (color) => {
    setTheme({ color: color });
    console.log(theme.color);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 p-2">
          <p className="font-medium">Solid Colors</p>
          <div className="flex flex-row flex-wrap gap-2">
            {solids.map((ele, i) => (
              <div
                style={{
                  backgroundColor: `${ele.color}`,

                  border: "1px solid grey",
                  borderRadius: "8px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: `${ele.color === "#000000" ? "#FFFFFF" : "#000000"}`,
                }}
                key={i}
                onClick={() => handleColorChange(ele.color)}
              >
                {theme.color === ele.color ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <p className="font-medium">Linear Gradients</p>
          <div className="flex flex-row flex-wrap gap-2">
            {linearGradients.map((ele, i) => (
              <div
                style={{
                  backgroundImage: `${ele.gradient}`,
                  border: "1px solid grey",
                  borderRadius: "8px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: `${ele.color === "#000000" ? "#FFFFFF" : "#000000"}`,
                }}
                key={i}
                onClick={() => handleColorChange(ele.gradient)}
              >
                {theme.color === ele.gradient ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <p className="font-medium">Radical Gradients</p>
          <div className="flex flex-row flex-wrap gap-2">
            {radialGradients.map((ele, i) => (
              <div
                style={{
                  backgroundImage: `${ele.gradient}`,
                  border: "1px solid grey",
                  borderRadius: "8px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: `${ele.color === "#000000" ? "#FFFFFF" : "#000000"}`,
                }}
                key={i}
                onClick={() => handleColorChange(ele.gradient)}
              >
                {theme.color === ele.gradient ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <input type='color' onChange={handleColorChange}/> */}
    </>
  );
};

export default ThemeSelector;
