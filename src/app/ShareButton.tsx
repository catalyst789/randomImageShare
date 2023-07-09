"use client"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

type ShareButtonProps = {
  imageUrl: string;
};

const ShareButtons = ({ imageUrl }: ShareButtonProps) => {
  const shareUrl = imageUrl;
  return (
    <div
      style={{
        display: "flex",
        marginTop: "1rem",
        gap: "1rem",
      }}
    >
      <FacebookShareButton content={imageUrl} url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
