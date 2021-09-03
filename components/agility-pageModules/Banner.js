import React, { useState, useEffect } from "react";
import agility from "@agility/content-fetch";

const Banner = (props) => {
  const { module } = props;

  const { fields } = module;
  // console.log("b", fields);
  return (
    <div
      className={`md:px-52 ${
        fields?.orientation == "right"
          ? "text-right text-white bg-black pb-28 pt-32"
          : "pb-28 pt-40"
      }`}
    >
      <p className="text-sm text-indigo-400 uppercase">{fields.heading}</p>
      <p className="text-3xl font-bold">{fields.description}</p>
    </div>
  );
};

export default Banner;
