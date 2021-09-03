import RichTextArea from "./RichTextArea";
import DefaultModule from "./DefaultModule";
import HeroHeading from "./HeroHeading";
import IconGallery from "./IconGallery";
import Banner from "./Banner";
import ParagraphWithHeading from "./ParagraphWithHeading";
import NumberedPosts from "./NumberedPosts"

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "RichTextArea", module: RichTextArea },
  { name: "HeroHeading", module: HeroHeading },
  { name: "IconGallery", module: IconGallery },
  { name: "Banner", module: Banner },
  { name: "ParagraphWithHeading", module: ParagraphWithHeading },
  { name: "NumberedPosts", module: NumberedPosts }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return DefaultModule;
  return obj.module;
};
