// Function for delete the post
var modalId;
function deleteModal(id) {
    modalId = id;
    return id;
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


//Function to show the contents of post in post.hrml page.
function openPost(id) {
    var auth = document.getElementById("author-"+id).textContent;
    var title = document.getElementById("p-" + id).textContent;
    var desc = document.getElementById("desc-" + id).textContent;

    var obj  = {"authNmae": auth, "titleName": title, "descContent": desc};

    sessionStorage.setItem("theObj", JSON.stringify(obj));
    window.location.href = 'post.html';
}

