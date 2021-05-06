var modal;
var modalId;
function deleteModal(id) {
    modalId = id;
    return id;
    // modal = document.getElementById('delete-modal')
    // modal.style.display = 'block';
    // document.getElementsByClassName('yes-btn')[0].id = elementId;
}

function deletePost(postid){
    for(var i = 0; i < 10 ; i++){
        if(i == deleteModal(modalId)){
            i = "post" + i;
            var cardModal = document.getElementById(i);
            cardModal.style.display = 'none';
        }
    }
}


// function deletePost(postid) {
//     var finalid = "post" + postid;
//     document.getElementById(`${finalid}`).style.display = 'none';
//     modal.style.display = 'none';
// }


function openPost(id) {
    // var title = document.getElementById(`title-${id}`).childNodes;
    // title = title[1].innerHTML;
    // var description = document.getElementById(`desc-${id}`).innerHTML;
    // var author = document.getElementById(`post-author-${id}`).childNodes;
    // author = author[1].innerHTML;
    // localStorage.setItem('title', title);
    // localStorage.setItem('description', description);
    // localStorage.setItem('author', author);
    window.location.href='post.html';
}

