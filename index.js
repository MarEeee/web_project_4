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
    document.querySelector(".form__input_type_title").value = "";
    document.querySelector(".form__input_type_link").value = "";   
}

function showImage(image, title){    
    popup.classList.remove("disabled");
    popupImage.src = image;
    popupImage.alt  = title;
    popupTitle.textContent = title;
}

function closeBtnClick(){     
    editForm.classList.add("disabled");  
    createForm.classList.add("disabled");
    popup.classList.add("disabled"); 
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
    cardElement.querySelector(".photo__remove").addEventListener("click", function(evt){
        evt.target.parentNode.remove();        

    });

    cardElement.querySelector(".photo__button-image").addEventListener("click", (item) =>{       
        
        showImage(link, title);
    });
    
    document.querySelector(".photo__elements").prepend(cardElement); 
}

function formSubmitHandlerEdit(evt){
    evt.preventDefault();  
    profileTitle.textContent = placeNameInput.value;
    profileSubtitle.textContent = infoInput.value;
    closeBtnClick();   
}

function formSubmitHandlerCreate(evt){
    evt.preventDefault();   
    const newCardTitle = document.querySelector(".form__input_type_title");
    const newCardLink = document.querySelector(".form__input_type_link");
    addNewCard(newCardTitle.value, newCardLink.value);
    closeBtnClick(); 
}

const initialCardsReverse = Object.assign([], initialCards).reverse();

initialCardsReverse.forEach(function(item){
    addNewCard(item.name, item.link);
 });

editButton.addEventListener("click", editInfo);
addButton.addEventListener("click", openAddForm);

closeEditButton.addEventListener("click", closeBtnClick);
closeAddButton.addEventListener("click", closeBtnClick);
closePopupButton.addEventListener("click", closeBtnClick);

editForm.addEventListener("submit", formSubmitHandlerEdit);
createForm.addEventListener("submit", formSubmitHandlerCreate);
