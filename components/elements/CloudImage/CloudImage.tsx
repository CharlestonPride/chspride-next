import { Image } from "cloudinary-react";

type ImageProps = {
  imageId: string;
  className: string;
};

const CloudImage = ({ imageId, className }: ImageProps) => {
  return (
    <Image
      className={className}
      cloudName="charlestonpride-org"
      publicId={imageId}
      dpr="auto"
      responsive
      width="auto"
      crop="scale"
      responsiveUseBreakpoints="true"
    ></Image>
  );
};

export default CloudImage;
