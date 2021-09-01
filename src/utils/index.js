export const isFileImage = (linkImage = "") => {
  return (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(linkImage);
}