let btnI = document.getElementById('like');
let likeCount = document.querySelector('.like-count');
let count = 0;
let click = 1;
btnI.addEventListener('click', likeCounter);
function likeCounter(){
    if(click){
        count++;
        likeCount.innerHTML = `${count} likes`;
        click = 0;
    }else{
        click = 1;
    }
    btnI.classList.toggle('active');    
}