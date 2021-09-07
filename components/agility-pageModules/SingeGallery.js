const SingleGallery = ({ dynamicPageItem }) => {
  const { category, title, gallery } = dynamicPageItem.fields;
  return (
    <div>
      <h1>{title}</h1>
      <h1>{category}</h1>
    </div>
  );
};

export default SingleGallery;
