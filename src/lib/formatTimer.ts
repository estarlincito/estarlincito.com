const formatTimer = (time: number) => {
  let h = Math.floor((time / (60 * 60)) % 24);
  let m = Math.floor((time / 60) % 60);
  let s = Math.floor(time % 60);

  const rounde = (n: number) => {
    return n <= 9 ? '0' : '';
  };

  let hours = `${rounde(h)}${h}:`;
  let minutes = `${rounde(m)}${m}:`;
  let seconds = `${rounde(s)}${s}`;

  return { hours, minutes, seconds };
};
export default formatTimer;
