const container = document.querySelector(".page");

const editForm = document.querySelector(".edit_form"); 
const createForm = document.querySelector(".create_form");


const editButton = container.querySelector(".profile__edit-button");
const addButton = container.querySelector(".profile__add-button");

const closeEditButton = container.querySelector('.close_edit-form');
const closeAddButton = container.querySelector('.close_add-form');
const closePopupButton = container.querySelector(".popup__close-button");


const placeNameInput = document.querySelector(".form__input_type_place-name");
const infoInput = document.querySelector(".form__input_type_info");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const popup = container.querySelector(".popup");
const popupImage = container.querySelector(".popup__image");
const popupTitle =  container.querySelector(".popup__title");

const formInputTitle = document.querySelector(".form__input_type_title");
const formInputLink = document.querySelector(".form__input_type_link");

const photoElements = document.querySelector(".photo__elements");
const newCardTitle = document.querySelector(".form__input_type_title");
const newCardLink = document.querySelector(".form__input_type_link");


const initialCards = [
    {
        name: "Dunwich Borers",
        link: "./images/place1.png"
    },
    {
        name: "Pickman's gallery",
        link: "./images/place2.png"
    },
    {
        name: "Glowing Sea",
        link: "./images/place3.png"
    },
    {
        name: "HalluciGen, Inc",
        link: "./images/place4.png"
    },
    {
        name: "Federal Surveillence",
        link: "./images/place5.png"
    },
    {
        name: "Fens Street sewer",
        link: "./images/place6.png"
    }
]

function editInfo(){        
    editForm.classList.remove("disabled");    
    placeNameInput.setAttribute("value", profileTitle.textContent);
    infoInput.setAttribute("value", profileSubtitle.textContent);
    
}

function openAddForm(){
    createForm.classList.remove("disabled");    
    formInputTitle.value = "";
    formInputLink.value = "";   
}

function showImage(image, title){    
    popup.classList.remove("disabled");
    popupImage.src = image;
    popupImage.alt  = title;
    popupTitle.textContent = title;
}

function closeBtnClick(currentForm){   
    currentForm.classList.add("disabled");  
}


function addNewCard(title, link){
    const cardTemplate = document.querySelector("#photo__element").content;
    const cardElement = cardTemplate.cloneNode(true);   
    
    cardElement.querySelector(".photo__title").textContent = title;
    cardElement.querySelector(".photo__image").src = link;
    cardElement.querySelector(".photo__image").alt = title;
    cardElement.querySelector(".photo__button").addEventListener("click", (evt) => {            
        evt.target.classList.toggle("photo__button_active");
    });
    cardElement.querySelector(".photo__remove").addEventListener("click", (evt) => {
        evt.target.parentNode.remove();        

    });

    cardElement.querySelector(".photo__button-image").addEventListener("click", (item) =>{     
        showImage(link, title);
    });
    
    photoElements.prepend(cardElement); 
}

function formSubmitHandlerEdit(evt){
    evt.preventDefault();  
    profileTitle.textContent = placeNameInput.value;
    profileSubtitle.textContent = infoInput.value;
    closeBtnClick(editForm);   
}

function formSubmitHandlerCreate(evt){
    evt.preventDefault();   
    // const newCardTitle = document.querySelector(".form__input_type_title");
    // const newCardLink = document.querySelector(".form__input_type_link");
    addNewCard(newCardTitle.value, newCardLink.value);
    closeBtnClick(createForm); 
}

const initialCardsReverse = Object.assign([], initialCards).reverse();

initialCardsReverse.forEach(function(item){
    addNewCard(item.name, item.link);
 });

editButton.addEventListener("click", editInfo);
addButton.addEventListener("click", openAddForm);



editForm.addEventListener("submit", formSubmitHandlerEdit);
createForm.addEventListener("submit", formSubmitHandlerCreate);

closeEditButton.addEventListener("click", () => {
    closeBtnClick(editForm);
});
closeAddButton.addEventListener("click", () => {
    closeBtnClick(createForm)
});
closePopupButton.addEventListener("click", () => {
    closeBtnClick(popup)
});
