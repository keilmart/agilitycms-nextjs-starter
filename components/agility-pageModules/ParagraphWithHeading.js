import React, { useState, useEffect } from "react";
import agility from "@agility/content-fetch";

const ParagraphWithHeading = (props) => {
  const { module } = props;

  const { fields } = module;
  console.log(fields);
  return (
    <div className="flex m-40">
      <div className="flex flex-col justify-center w-1/2">
        <h4 className="pb-6 text-indigo-400">----------- {fields.heading}</h4>
        <p className="text-4xl">{fields.title}</p>
      </div>
      <div className="w-1/2 px-14">
        <p>{fields.description}</p>
        <p className="mt-6 font-bold text-indigo-400">------- Read More</p>
      </div>
    </div>
  );
};

export default ParagraphWithHeading;
