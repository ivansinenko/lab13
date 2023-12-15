const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
  const progress = progressBar.querySelector('progress');
  const gradientValue = progress.value;

  progressBar.style.background = `radial-gradient(closest-side, white 65%, transparent 50% 100%), conic-gradient(rgb(189, 147, 112) ${gradientValue}%, rgb(210, 210, 210) 0)`;
});
