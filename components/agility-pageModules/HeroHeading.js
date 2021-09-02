import React from "react";
// import { renderHTML } from "@agility/nextjs";

const HeroHeading = ({ module }) => {
  // get module fields
  const { fields } = module;

  console.log(fields);

  return (
    <div className="relative">
      <img
        src={fields.heroImage.url}
        alt={fields.heading}
        className="object-cover min-w-full min-h-screen bg-center bg-cover"
      />
      <div className="absolute rotate-180 left-16 top-1/2">
        <img
          src="/assets/swiper.svg"
          alt="Agility CMS"
          width="49"
          height="24"
        />
      </div>
      <div className="absolute right-16 top-1/2">
        <img
          src="/assets/swiper.svg"
          alt="Agility CMS"
          width="49"
          height="24"
        />
      </div>
      <div className="absolute w-1/2 mt-10 text-white left-56 top-1/3">
        <p className="mb-10 text-2xl">------- {fields.headingInfo}</p>
        <h1 className="font-bold text-8xl">{fields.heading}</h1>
      </div>
    </div>
  );
};

export default HeroHeading;
