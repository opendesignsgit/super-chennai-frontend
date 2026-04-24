import { API_BASE_URL } from "../../../../config";

const withBaseUrl = (url) =>
  url ? `${API_BASE_URL}${url}` : "/images/placeholder.jpg";


const MobileAdMedia = ({ ad }) => {
  const media =
    ad?.mobileSettings?.mobileMedia || ad.media;

  const mediaType =
    ad?.mobileSettings?.mobileMediaType || ad.mediaType;

  const mediaUrl =
    ad?.mobileSettings?.mobileMediaUrl || ad.mediaUrl;

  const altText =
    ad?.mobileSettings?.mobileAltText || ad.altText;

  if (mediaType === "video" && mediaUrl) {
    return (
      <iframe
        src={mediaUrl}
        className="w-full h-full rounded-lg"
        title={ad.title}
        allow="autoplay"
      />
    );
  }

  if (media?.url) {
    return (
      <a href={ad.targetUrl || "#"} target="_blank">
        <img
          src={withBaseUrl(media.url)}
          alt={altText || ad.title}
          className="w-full rounded-lg"
        />
      </a>
    );
  }

  return null;
};

export default MobileAdMedia;