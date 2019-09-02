
data = {
    id:5,
    name:"Lili"
}

let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let courses = document.getElementById("courses");
let getCourses = document.getElementById("getCourses");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");
let openModal = document.querySelector("#courses");
let myModal = document.getElementById("myModal");
let closeModal = document.getElementById("close");
let imgModal = document.getElementById("imgModal");

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    courses.classList.remove('view');
    getCourses.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
    
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});

getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getCourses.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        courses.classList.add('view');
        getCourses.classList.add('selected');
    
    }
})
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})


var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event){
    event.preventDefault();
  });

  openModal.addEventListener("click", openModalFuntion);

  function openModalFuntion(event){
      if (event.target.localName == "img"){
        let imagePath = event.target.currentSrc
        imagePath = `.${imagePath.substring(imagePath.indexOf("/img/"))}`
        console.log(imagePath)
        imgModal.src = imagePath
        myModal.classList.add("modalOn")
    }
  }
  
  closeModal.addEventListener("click", closeModalFuntion);

  function closeModalFuntion(event){
    myModal.classList.remove("modalOn")
}