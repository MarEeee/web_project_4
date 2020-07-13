const container = document.querySelector(".page");
const editForm = document.querySelector(".edit-form"); 
const editButton = container.querySelector(".profile__edit-button");
const closeButton = container.querySelector(".edit-form__close-button");
const saveButton = container.querySelector(".edit-form__save-button");
const titleInput = document.querySelector(".input__type_title");
const infoInput = document.querySelector(".input__type_info");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formElement = container.querySelector(".edit-form ");

function editInfo(){    

    editForm.classList.remove("disabled");
    console.log('reer');
    titleInput.setAttribute("value", profileTitle.textContent);
    infoInput.setAttribute("value", profileSubtitle.textContent);
}


function closeBtnClick(){      

    editForm.classList.add("disabled");  
}

function formSubmitHandler(evt){
    evt.preventDefault();

    
    profileTitle.textContent = titleInput.value;
    profileSubtitle.textContent = infoInput.value;
    closeBtnClick();   
}

editButton.addEventListener("click", editInfo);
closeButton.addEventListener("click", closeBtnClick);
formElement.addEventListener("submit", formSubmitHandler)