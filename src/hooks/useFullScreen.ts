import toggleFullscreen, { isFullscreen } from 'toggle-fullscreen';
const activeClassName = 'fullscreen-enabled';

const useFullScreen = (selector: string) => {
  const onFullScreenChange = () => {
    const element = document.querySelector(selector);
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
