let btnI = document.getElementById('like');
let likeCount = document.querySelector('.like-count');
let count = localStorage.getItem('likesCount', JSON.stringify());
likeCount.innerHTML = `${count} likes`;

let click = 1;
btnI.addEventListener('click', likeCounter);
function likeCounter(){
    if(click){
        count++;
        likeCount.innerHTML = `${count} likes`;
        click = 0;
        localStorage.setItem('likesCount', JSON.stringify(count));
    }else{
        click = 1;
    }

    btnI.classList.toggle('active');    
}