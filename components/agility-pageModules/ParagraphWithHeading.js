import React, { useState, useEffect } from "react";
import agility from "@agility/content-fetch";

const ParagraphWithHeading = (props) => {
  const { module } = props;

  const { fields } = module;
  console.log(fields);
  return (
    <div className="flex flex-col mx-20 mt-20 lg:mx-40 lg:mt-40 lg:flex-row">
      <div className="flex flex-col w-full lg:w-1/2">
        <h4 className="pb-6 text-indigo-400">----------- {fields.heading}</h4>
        <p className="text-4xl">{fields.title}</p>
      </div>
      <div className="w-full px-0 mt-20 lg:w-1/2 lg:mt-0 lg:px-14">
        <p>{fields.description}</p>
        <p className="mt-6 font-bold text-indigo-400">------- Read More</p>
      </div>
    </div>
  );
};

export default ParagraphWithHeading;
