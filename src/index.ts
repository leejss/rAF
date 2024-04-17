export type RafCallBackFn = (deltaTime: number) => void;

export function rAF(callback: RafCallBackFn) {
  let requestId: number;
  let prevTimestamp: number;
  const animate = (timestamp: number) => {
    // first frame
    if (!prevTimestamp) {
      prevTimestamp = timestamp;
    }

    const deltaTime = timestamp - prevTimestamp;
    callback(deltaTime);

    prevTimestamp = timestamp;
    requestId = requestAnimationFrame(animate);
  };

  // start the animation
  requestId = requestAnimationFrame(animate);
  const unbind = () => {
    // stop the animation
    requestId && cancelAnimationFrame(requestId);
  };
  return unbind;
}
