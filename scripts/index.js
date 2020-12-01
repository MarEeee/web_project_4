const container = document.querySelector(".page");

const editForm = document.querySelector(".edit_form"); 
const createForm = document.querySelector(".create_form");

const overlayEditForm = editForm.querySelector(".form__profile");
const overlayCreateForm = createForm.querySelector(".form__profile");

const editButton = container.querySelector(".profile__edit-button");
const addButton = container.querySelector(".profile__add-button");

const closeEditButton = container.querySelector('.close_edit-form');
const closeAddButton = container.querySelector('.close_add-form');
const closePopupButton = container.querySelector(".popup__close-button");


const placeNameInput = document.querySelector(".form__input_type_place-name");
const infoInput = document.querySelector(".form__input_type_info");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const popupBoxImage = container.querySelector(".popup");
const popupImage = container.querySelector(".popup__image");
const popupTitle =  container.querySelector(".popup__title");

const formInputTitle = document.querySelector(".form__input_type_title");
const formInputLink = document.querySelector(".form__input_type_link");

const photoElements = document.querySelector(".photo__elements");
const newCardTitle = document.querySelector(".form__input_type_title");
const newCardLink = document.querySelector(".form__input_type_link");





function openPopup(popup){
    popup.classList.remove("popup-closed");
}


function openEditInfo(){        
    openPopup(editForm);   
    placeNameInput.setAttribute("value", profileTitle.textContent);
    infoInput.setAttribute("value", profileSubtitle.textContent);
    escAddEventListener(editForm);
    
}

function openAddForm(){
    openPopup(createForm); 
    formInputTitle.value = "";
    formInputLink.value = "";
    
    buttonElement = createForm.querySelector(".form__create-button");
    disabledButton(buttonElement);
    escAddEventListener(createForm);   
}

function showImage(image, title){    
    openPopup(popupBoxImage);
    popupImage.src = image;
    popupImage.alt  = title;
    popupTitle.textContent = title;
    escAddEventListener(popupBoxImage, false);
}

function resetValidation(currentForm){
    const errorElements = Array.from(currentForm.querySelectorAll(".form__input_error"));
    const inputElements = Array.from(currentForm.querySelectorAll(".form__input"));
  
    errorElements.forEach((errorElement) => {
        errorElement.classList.remove("form__input_error_active");       
        errorElement.textContent = "";
    });
    inputElements.forEach((inputElement) => {
        inputElement.classList.remove("form__input_type_error");
    }); 
}


function closeForm(currentForm){   
    currentForm.classList.add("popup-closed");;
    resetValidation(currentForm);
    escRemoveEventListener(currentForm);
}

function closePopup(currentForm){
    currentForm.classList.add("popup-closed");
    escRemoveEventListener(currentForm, false);
}




function addNewCard(title, link){
    const cardTemplate = document.querySelector("#photo__element").content;
    const cardElement = cardTemplate.cloneNode(true);
    const photoTitle  = cardElement.querySelector(".photo__title");
    const photoImage = cardElement.querySelector(".photo__image");  
    
    photoTitle.textContent = title;
    photoImage.src = link;
    photoImage.alt = title;

    cardElement.querySelector(".photo__button").addEventListener("click", (evt) => {            
        evt.target.classList.toggle("photo__button_active");
    });
    cardElement.querySelector(".photo__remove").addEventListener("click", (evt) => {
        evt.target.parentNode.remove();        

    });

    cardElement.querySelector(".photo__button-image").addEventListener("click", (item) =>{     
        showImage(link, title);
    });
    
    return cardElement;   
}

function formSubmitHandlerEdit(evt){
    evt.preventDefault();  
    profileTitle.textContent = placeNameInput.value;
    profileSubtitle.textContent = infoInput.value;
    closePopup(editForm);   
}

function formSubmitHandlerCreate(evt){
    evt.preventDefault();     
    photoElements.prepend(addNewCard(newCardTitle.value, newCardLink.value));
    closePopup(createForm); 
}

const initialCardsReverse = Object.assign([], initialCards).reverse();

initialCardsReverse.forEach(function(item){
    
    photoElements.prepend(addNewCard(item.name, item.link)); 
 });

editButton.addEventListener("click", openEditInfo);
addButton.addEventListener("click", openAddForm);



editForm.addEventListener("submit", formSubmitHandlerEdit);
createForm.addEventListener("submit", formSubmitHandlerCreate);

closeEditButton.addEventListener("click", () => {
    closeForm(editForm);
});
closeAddButton.addEventListener("click", () => {
    closeForm(createForm)
});
closePopupButton.addEventListener("click", () => {
    closePopup(popupBoxImage)
});


editForm.addEventListener("mousedown", () => {  
    closeForm(editForm);
});
createForm.addEventListener("mousedown", () => {
    closeForm(createForm);
});
popupBoxImage.addEventListener("mousedown", () => {
    closePopup(popupBoxImage);
});

function escAddEventListener(currentForm, flag = true){
    if(flag){
        document.addEventListener("keydown", (evt) => {     
            if (evt.key === 'Escape'){
                closeForm(currentForm);
            }    
        });
    }else{
        document.addEventListener("keydown", (evt) => {     
            if (evt.key === 'Escape'){
                closePopup(currentForm);
            }    
        });
    }   
}

function escRemoveEventListener(currentForm, flag = true){
    if(flag){
        document.removeEventListener("keydown", (evt) => {     
            if (evt.key === 'Escape'){
                closeForm(currentForm);
            }    
        });
    }else{
        document.removeEventListener("keydown", (evt) => {     
            if (evt.key === 'Escape'){
                closePopup(currentForm);
            }   
        });
    }
}


overlayEditForm.addEventListener("mousedown", (evt) => { //    without these handlers, forms start to close on any click
    evt.stopPropagation();
});
overlayCreateForm.addEventListener("mousedown", (evt) => {
        evt.stopPropagation();
});
popupImage.addEventListener("mousedown", (evt) => {   
    evt.stopPropagation();
    
});
