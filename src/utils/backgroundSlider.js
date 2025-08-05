export function startBackgroundSlideshow(setImageIndex, totalImages) {
  let index = 0;
  const interval = setInterval(() => {
    index = (index + 1) % totalImages;
    setImageIndex(index);
  }, 3000);

  return () => clearInterval(interval);
}
