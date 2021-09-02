import React from "react";
// import { renderHTML } from "@agility/nextjs";

const HeroHeading = ({ module }) => {
  // get module fields
  const { fields } = module;

  console.log(fields);

  return (
    <div className="relative">
      <img
        src={fields?.heroImage?.url}
        // src={`${fields?.mainHeader == "true" ? fields?.heroImage?.url : ""}`}
        alt={fields?.heading}
        className="object-cover min-w-full min-h-screen bg-black bg-center bg-cover"
      />
      {fields?.mainHeader == "true" ? (
        <div>
          <button className="absolute rotate-180 rounded-lg left-16 top-1/2 hover:bg-indigo-400">
            <img
              src="/assets/swiper.svg"
              alt="Agility CMS"
              width="49"
              height="24"
            />
          </button>
          <button className="absolute rounded-lg right-16 top-1/2 hover:bg-indigo-400">
            <img
              src="/assets/swiper.svg"
              alt="Agility CMS"
              width="49"
              height="24"
            />
          </button>
        </div>
      ) : (
        <div className="absolute right-40 top-1/2">
          <button className="px-4 py-2 text-white border-2 border-indigo-400 rounded-full hover:bg-indigo-400 hover:text-black">
            <p>Get Featured Now</p>
          </button>
        </div>
      )}
      <div className="absolute w-1/2 mt-10 left-56 top-1/3">
        <p
          className={`mb-10 text-2xl uppercase ${
            fields?.mainHeader == "true" ? "text-white" : "text-indigo-400"
          }`}
        >
          {fields?.headingInfo}
        </p>
        <h1 className="font-bold text-white text-8xl">{fields?.heading}</h1>
        <p className="text-white">{fields?.description}</p>
      </div>
    </div>
  );
};

export default HeroHeading;
