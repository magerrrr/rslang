import toggleFullscreen, { isFullscreen } from 'toggle-fullscreen';
const activeClassName = 'fullscreen-enabled';
const toggleClassName = ".fullscreen-toggler";

const useFullScreen = () => {
  const onFullScreenChange = () => {
    const element = document.querySelector(toggleClassName);
    if (element) {
      toggleFullscreen(element, () => {
        const isFullScreen = isFullscreen();
        if (isFullScreen) {
          element.classList.add(activeClassName);
        } else {
          element.classList.remove(activeClassName);
        }
      });
    }
  };
  return onFullScreenChange;
};

export default useFullScreen;
