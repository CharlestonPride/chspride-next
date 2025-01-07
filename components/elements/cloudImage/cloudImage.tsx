type ImageProps = {
  imageId: string;
  className?: string;
};

const CloudImage = ({ imageId, className }: ImageProps) => {
  const baseUrl = "https://charleston-pride.stream.prepr.io/";

  if (imageId.split(".").pop() === imageId) {
    imageId += ".jpg";
  }
  const src = imageId.startsWith(baseUrl) ? imageId : baseUrl + imageId;
  return <img src={src} className={className ?? "img-fluid"} />;
};

export default CloudImage;
