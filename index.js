const container = document.querySelector(".page");
const editForm = document.querySelector(".form"); 
const editButton = container.querySelector(".profile__edit-button");
const closeButton = container.querySelector(".form__close-button");
const titleInput = document.querySelector(".form__input_type_title");
const infoInput = document.querySelector(".form__input_type_info");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");


function editInfo(){    

    editForm.classList.remove("disabled");
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
editForm.addEventListener("submit", formSubmitHandler);