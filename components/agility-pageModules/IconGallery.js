import React from "react";
import { renderHTML } from "@agility/nextjs";

const IconGallery = ({ module, customData }) => {
  // get module fields
  const { fields } = module;

  // console.log("icons", customData.icons);
  console.log("fields", fields);
  return (
    <>
      <div className="flex flex-row flex-wrap px-10 pt-16 md:px-40 md:pt-20">
        {!!customData &&
          customData.icons.map((item, index) => {
            return (
              <div
                className={`w-full
                ${
                  fields?.titleOrientation == "second"
                    ? "md:w-4/12 px-4 md:py-20 py-12"
                    : fields?.iconOrientation == 3
                    ? "md:w-4/12 px-12 md:py-20 py-12"
                    : fields?.iconOrientation == 8
                    ? "md:w-6/12 lg:w-3/12 px-6 py-10 m-auto"
                    : ""
                }
                `}
                key={index}
              >
                <div
                  className={`flex ${
                    fields?.iconOrientation == 3
                      ? ""
                      : fields?.iconOrientation == 8
                      ? "justify-center"
                      : ""
                  } ${
                    fields?.titleOrientation == "second" ? "justify-center" : ""
                  }`}
                >
                  <img
                    className={`flex ${
                      fields?.iconOrientation == 3
                        ? ""
                        : fields?.iconOrientation == 8
                        ? "w-full px-8 justify-center my-5"
                        : ""
                    }`}
                    src={item?.fields?.iconImage.url}
                    alt={item?.fields?.heading}
                  />
                </div>
                <div>
                  {fields?.titleOrientation == "first" ? (
                    <div>
                      <h1 className="text-xl font-bold text-black py-7">
                        {item?.fields?.heading}
                      </h1>
                      <h1 className="text-black">
                        {item?.fields?.description}
                      </h1>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-center text-gray-600 pt-7">
                        {item?.fields?.description}
                      </h1>
                      <h1 className="text-xl font-bold text-center text-black py-7">
                        {item?.fields?.heading}
                      </h1>
                    </div>
                  )}
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
