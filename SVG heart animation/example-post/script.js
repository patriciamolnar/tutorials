window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('heart');
  const num = document.getElementById('numOfLikes');
  const likeUnlikePost = () => {
    if(heart.classList.contains('like')) {
      heart.classList.add('unlike'); 
      heart.classList.remove('like'); 
      num.textContent = '38';
    } else {
      heart.classList.add('like'); 
      heart.classList.remove('unlike'); 
      num.textContent = '39';
    }
  }
  heart.addEventListener('click', likeUnlikePost);

  //const heartSVG = document.querySelector('#heart path');
  //console.log(heartSVG.getTotalLength());
})