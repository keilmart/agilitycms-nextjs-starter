import React from "react";
import { renderHTML } from "@agility/nextjs";

const IconGallery = ({ module, customData }) => {
  // get module fields
  const { fields } = module;

  console.log(customData.icons);

  return (
    <>
      <div className="flex flex-row flex-wrap px-20">
        {!!customData &&
          customData.icons.map((item, index) => {
            return (
              <div className="w-full px-16 py-24 md:w-4/12" key={index}>
                <div className="flex">
                  <img
                    className="pb-10"
                    src={item?.fields.iconImage.url}
                    alt={item?.fields.heading}
                  />
                </div>
                <div className="text-black">
                  <h1>{item?.fields.heading}</h1>
                  <h1>{item?.fields.description}</h1>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

IconGallery.getCustomInitialProps = async function ({
  agility,
  languageCode,
  channelName,
  item,
}) {
  const api = agility;

  const icons = await api.getContentList({
    referenceName: item.fields.iconList.referencename,
    channelName: channelName,
    languageCode: languageCode,
  });
  console.log(icons);
  return {
    icons: icons,
  };
};

export default IconGallery;
