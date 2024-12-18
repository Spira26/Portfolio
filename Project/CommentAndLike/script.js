//likes
let heart = document.querySelector('.heart')
let likesNumber = document.querySelector('.likes-number')

heart.onclick = function () {

    if (heart.classList.contains('added')) {
        likesNumber.textContent--;
    } else {
        likesNumber.textContent++;
    }
    heart.classList.toggle('added');
}



// theEnd likes

//comments
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let commentFieldName = document.querySelector('.comment-field-name')
commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('p');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
commentField.value = '';
  commentList.append(newComment);
  
let newName = document.createElement('h3');
newName.classList.add('user-comment');
newName.textContent = commentFieldName.value;
commentFieldName.value = '';
commentList.append(newName);  


};
//theEnd comments