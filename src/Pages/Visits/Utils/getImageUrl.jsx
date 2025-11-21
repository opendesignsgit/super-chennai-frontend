import { API_BASE_URL } from "../../../../config";

export const getImageUrl = (image) => {
  if (!image) return null;

  // STEP 1: If the value is a string (already a URL)
  if (typeof image === "string") {
    return image.startsWith("http") ? image : API_BASE_URL + image;
  }

  // STEP 2: If the object has a direct .url
  if (image?.url) {
    return image.url.startsWith("http") ? image.url : API_BASE_URL + image.url;
  }

  // STEP 3: If nested { image: { url } }
  if (image?.image?.url) {
    const url = image.image.url;
    return url.startsWith("http") ? url : API_BASE_URL + url;
  }

  // STEP 4: If thumbnail exists → prefer thumbnail
  if (image?.sizes?.thumbnail?.url) {
    const url = image.sizes.thumbnail.url;
    return url.startsWith("http") ? url : API_BASE_URL + url;
  }

  // STEP 5: If any size exists (small / square)
  const anySize =
    image?.sizes?.small?.url ||
    image?.sizes?.square?.url ||
    image?.sizes?.medium?.url ||
    image?.sizes?.large?.url ||
    image?.sizes?.xlarge?.url;

  if (anySize) {
    return anySize.startsWith("http") ? anySize : API_BASE_URL + anySize;
  }

  // STEP 6: If only filename exists
  if (image?.filename) {
    return `${API_BASE_URL}/api/media/file/${image.filename}`;
  }

  return null;
};
