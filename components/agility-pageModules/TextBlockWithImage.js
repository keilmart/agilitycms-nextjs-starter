import React from "react";
import { renderHTML } from "@agility/nextjs";

const TextBlockWithImage = ({ module }) => {
  // get module fields
  const { fields } = module;

  console.log(fields);

  return (
    <div className="relative px-8">
      {/* <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
        <div
          className="prose max-w-full mx-auto"
          dangerouslySetInnerHTML={renderHTML(fields.textblob)}
        />
      </div> */}
      <h1>{fields.title}</h1>
      <h1>{fields.tagline}</h1>
      <img
        className="rounded object-center object-contain"
        src={fields.image.url}
        alt={fields.heading}
      />
    </div>
  );
};

export default TextBlockWithImage;
