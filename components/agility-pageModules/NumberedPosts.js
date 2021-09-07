import React from "react";
import { renderHTML } from "@agility/nextjs";

const NumberedPosts = ({ module, customData }) => {
  // get module fields
  const { fields } = module;

  // console.log("data", module);
  // console.log("fields", customData.posts);
  return (
    <div className="w-full p-10 text-white bg-black lg:max-w-2/5">
      <h1>{fields.componentHeading}</h1>
      {!!customData &&
        customData.posts.map((item, index) => {
          return (
            <div className="flex flex-row my-20">
              <div>
                <p className="text-6xl">{`0` + (1 + index)}</p>
              </div>
              <div className="pl-12">
                <p className="font-medium">{item.fields?.heading}</p>
                <p className="w-1/2 font-extralight text-gray-medium lg:w-full">
                  {item.fields?.description}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

NumberedPosts.getCustomInitialProps = async function ({
  agility,
  languageCode,
  channelName,
  item,
}) {
  const api = agility;

  const posts = await api.getContentList({
    referenceName: item.fields.numberedPostList.referencename,
    channelName: channelName,
    languageCode: languageCode,
  });
  console.log(posts);
  return {
    posts: posts,
  };
};

export default NumberedPosts;
