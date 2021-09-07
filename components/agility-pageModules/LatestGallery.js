const LatestGallery = ({ customData }) => {
  return (
    <div>
      {/* {console.log(customData)} */}
      {JSON.stringify(customData)}
    </div>
  );
};

LatestGallery.getCustomInitialProps = async function ({
  agility,
  languageCode,
  channelName,
  item,
}) {
  const api = agility;

  const galleries = await api.getContentList({
    referenceName: "photogalleries",
    channelName: channelName,
    languageCode: languageCode,
  });
  console.log(galleries);
  return {
    galleries: galleries,
  };
};

export default LatestGallery;
