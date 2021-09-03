import React, { useState, useEffect } from "react";
import agility from "@agility/content-fetch";

const Banner = (props) => {
  const { module } = props;

  const { fields } = module;
  // console.log("b", fields);
  return (
    <div className="md:px-52 md:pt-20">
      <p className="text-sm text-indigo-400 uppercase">{fields.heading}</p>
      <p className="text-3xl font-bold">{fields.description}</p>
    </div>
  );
};

export default Banner;
