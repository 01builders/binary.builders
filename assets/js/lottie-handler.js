/**
 * Initialize a Lottie animation
 * @param {string} containerId - The ID of the container element
 * @param {string} animationPath - Path to the Lottie JSON file
 * @param {Object} options - Additional Lottie options
 * @returns {Object} Lottie animation instance
 */
function initLottie(containerId, animationPath, options = {}) {
  const defaultOptions = {
    container: document.getElementById(containerId),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath,
    ...options
  };

  return lottie.loadAnimation(defaultOptions);
}

/**
 * Play a Lottie animation
 * @param {Object} animation - Lottie animation instance
 */
function playAnimation(animation) {
  if (animation) {
    animation.play();
  }
}

/**
 * Pause a Lottie animation
 * @param {Object} animation - Lottie animation instance
 */
function pauseAnimation(animation) {
  if (animation) {
    animation.pause();
  }
}

/**
 * Stop a Lottie animation
 * @param {Object} animation - Lottie animation instance
 */
function stopAnimation(animation) {
  if (animation) {
    animation.stop();
  }
} 