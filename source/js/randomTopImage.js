document.addEventListener('DOMContentLoaded', function () {
  const imageList = ["1.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","2.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];

  const imageName = imageList[Math.floor(Math.random() * imageList.length)];

  document.querySelector('#page-header').style.backgroundImage = `url(/images/24/${imageName})`;
});
