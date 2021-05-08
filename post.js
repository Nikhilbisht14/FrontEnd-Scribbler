//Function to show the post in post.html page when we click on the post
window.onload = function() {
    var getObjFromSession = sessionStorage.getItem('theObj');
    var Obj = JSON.parse(getObjFromSession);
    document.getElementById('title').innerHTML = Obj["titleName"];
    document.getElementById('auth').innerHTML = Obj["authNmae"];
    document.getElementById('desc').innerHTML = Obj["descContent"];
}


//Function to edit the content and title of the post.
function makeContentEditable(){
    var getObjFromSession = sessionStorage.getItem('theObj');
    var Obj = JSON.parse(getObjFromSession);

    document.getElementById('post-title').contentEditable = "true";
    document.getElementById('post-title').style.border = "1px solid #d11d53";

    document.getElementById('post-desc').contentEditable = "true";
    document.getElementById('post-desc').style.border = "1px solid #d11d53";
    var author = Obj["authNmae"];
    document.getElementById('post-auth').innerHTML = 
        `<h5 id="auth">${author}</h5>`+`<button type="button" id="saveBtn"  onclick="saveContent();">Save <i class="fa fa-save"></i></button>`;
}

//Function to save the editable post
function saveContent(){
    var getObjFromSession = sessionStorage.getItem('theObj');
    var Obj = JSON.parse(getObjFromSession);
    
    var author = Obj["authNmae"];
    document.getElementById('post-auth').innerHTML = 
        `<h5 id="auth">${author}</h5>`+`<button type="button" id="editBtn" onclick="makeContentEditable();">Edit <i class="fa fa-edit"></i></button>`;
    document.getElementById('post-title').contentEditable = "false";
    document.getElementById('post-desc').contentEditable = "false";
    document.getElementById('post-desc').style.border = "none";
    document.getElementById('post-title').style.border = "none";
}

// Function to calculate the no of likes
var count = 0;
function increaseLike() {
    count++;
    if (count === 1) {
        document.getElementById('like-section').innerHTML =
    `<button type="button" id="like-btn" class="post-btn" onclick="increaseLike()"><i class="fa fa-thumbs-up"></i> Liked</button>`+
    `<p id="like-text" style="font-family: monospace; margin-top: 10px;" >${count} person likes this!</p>`;
    } else if (count > 1) {
        document.getElementById('like-section').innerHTML =
    `<button type="button" id="like-btn" class="post-btn" onclick="increaseLike()"><i class="fa fa-thumbs-up"></i> Liked</button>`+
    `<p id="like-text" style="font-family: monospace; margin-top: 10px;">${count} people like this!</p>`;
    }
    
}

// Function to add the comments in the post
function addComment() {
    var comment = document.getElementById('comment-textarea').value;
    if (comment !== '') {
        document.getElementById('all-comments').innerHTML += `<p class="comment">${comment}</p>`;
        document.getElementById('comment-textarea').value='';
    }
}

