document.addEventListener('DOMContentLoaded', function () {
  const imageList = $imageList;

  const imageName = imageList[Math.floor(Math.random() * imageList.length)];

  document.querySelector('#page-header').style.backgroundImage = `url($wallpapers_dir${imageName})`;
});
