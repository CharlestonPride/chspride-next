import { Image, Transformation } from "cloudinary-react";

type ImageProps = {
  imageId: string;
  className?: string;
  children?: Transformation;
};

const CloudImage = ({ imageId, className, children }: ImageProps) => {
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
      secure="true"
    >
      {children}
    </Image>
  );
};

export default CloudImage;
