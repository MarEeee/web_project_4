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
const createButton = createForm.querySelector(".form__create-button");

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
    escAddEventListener(popup);
}


function openEditInfo(){        
    openPopup(editForm);   
    placeNameInput.setAttribute("value", profileTitle.textContent);
    infoInput.setAttribute("value", profileSubtitle.textContent);  
}

function openAddForm(){
    openPopup(createForm); 
    formInputTitle.value = "";
    formInputLink.value = "";    
    
    disabledButton(createButton);
    
}

function showImage(image, title){    
    openPopup(popupBoxImage);
    popupImage.src = image;
    popupImage.alt  = title;
    popupTitle.textContent = title;   
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
    closePopup(currentForm);
    resetValidation(currentForm);
}

function closePopup(currentForm){
    currentForm.classList.add("popup-closed");
    escRemoveEventListener(currentForm);
}




// function addNewCard(title, link){
//     const cardTemplate = document.querySelector("#photo__element").content;
//     const cardElement = cardTemplate.cloneNode(true);
//     const photoTitle  = cardElement.querySelector(".photo__title");
//     const photoImage = cardElement.querySelector(".photo__image");  
    
//     photoTitle.textContent = title;
//     photoImage.src = link;
//     photoImage.alt = title;

//     cardElement.querySelector(".photo__button").addEventListener("click", (evt) => {            
//         evt.target.classList.toggle("photo__button_active");
//     });
//     cardElement.querySelector(".photo__remove").addEventListener("click", (evt) => {
//         evt.target.parentNode.remove();        

//     });

//     cardElement.querySelector(".photo__button-image").addEventListener("click", (item) =>{     
//         showImage(link, title);
//     });
    
//     return cardElement;   
// }

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

// const initialCardsReverse = Object.assign([], initialCards).reverse();

// initialCardsReverse.forEach(function(item){
    
//     photoElements.prepend(addNewCard(item.title, item.url)); 
//  });

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
// closePopupButton.addEventListener("click", () => {
//     closePopup(popupBoxImage)
// });


editForm.addEventListener("mousedown", () => {  
    closeForm(editForm);
});
createForm.addEventListener("mousedown", () => {
    closeForm(createForm);
});
// popupBoxImage.addEventListener("mousedown", () => {
//     closePopup(popupBoxImage);
// });

function escAddEventListener(currentForm){    
    document.addEventListener("keydown", (evt) => {     
        escPress(evt, currentForm)   
    });
    
}

function escRemoveEventListener(currentForm){    
    document.removeEventListener("keydown", (evt) => {     
        escPress(evt, currentForm)   
    });   
}

function escPress(evt, currentForm){
    if (evt.key === 'Escape'){
        closeForm(currentForm);
    } 
}

overlayEditForm.addEventListener("mousedown", (evt) => {
    evt.stopPropagation();
});
overlayCreateForm.addEventListener("mousedown", (evt) => {
        evt.stopPropagation();
});
popupImage.addEventListener("mousedown", (evt) => {   
    evt.stopPropagation();
    
});



class Card{ 
    constructor(data, cardSelector){ 
        this._title = data.title;
        this._url = data.url;
        this._cardSelector = cardSelector;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._cardSelector)
        .content
        .cloneNode(true)

        return cardElement;
    }
    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".photo__title").textContent = this._title;
        this._element.querySelector(".photo__image").alt = this._title;
        this._element.querySelector(".photo__image").src = this._url;

        return this._element;
    }
    _handleOpenPopup(){
        openPopup(popupBoxImage);
        popupImage.src = this._url;
        popupImage.alt  = this._title;
        popupTitle.textContent = this._title; 
    }

    _handleClosePopup(){
        closePopup(popupBoxImage);
    }

    

    _setEventListeners(){
        console.log(this._element);
        this._element.querySelector(".photo__button-image").addEventListener("click", ()=> {            
            this._handleOpenPopup();
        });

        popupBoxImage.addEventListener("mousedown", () => {
            closePopup(popupBoxImage);
        });

        closePopupButton.addEventListener("click", () => {
            this._handleClosePopup();
        })

    }
    

    addNewCard(){

    }
    showElement(){
        console.log(this._title);
        console.log(this._url);
    }
}

const renderElements = () =>{
    initialCards.forEach((item)=>{
        const card = new Card(item, "#photo__element");
        const cardElement = card.generateCard();
        photoElements.append(cardElement);
        // card.showElement(); // it works!!!
    });    
}

renderElements();

class FormValidator{
    constructor(data, selector){
        // super(selector);
        this.data = data;

    }

    enableValidation(){

    }
}