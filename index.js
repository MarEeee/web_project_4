const container = document.querySelector(".page");

const editForm = document.querySelector(".edit_form"); 
const createForm = document.querySelector(".create_form");

const editButton = container.querySelector(".profile__edit-button");
const addButton = container.querySelector(".profile__add-button");

const closeEditButton = container.querySelector('[aria-label="Close edit form"]');
const closeAddButton = container.querySelector('[aria-label="Close add form"]');


const saveButton = container.querySelector(".form__save-button");
const createNewCardButton = container.querySelector(".form__create-button");

const placeNameInput = document.querySelector(".form__input_type_place-name");
const infoInput = document.querySelector(".form__input_type_info");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formTitle = document.querySelector(".form__title");

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

 initialCards.reverse().forEach(function(item){
    addNewCard(item.name, item.link);
 });

function editInfo(){        
    editForm.classList.remove("disabled");    
    placeNameInput.setAttribute("value", profileTitle.textContent);
    infoInput.setAttribute("value", profileSubtitle.textContent);
    
}

function addForm(){
    createForm.classList.remove("disabled");    
    document.querySelector(".form__input_type_title").value = "";
    document.querySelector(".form__input_type_link").value = "";   
}


function closeBtnClick(){      

    editForm.classList.add("disabled");  
    createForm.classList.add("disabled"); 
}


function addNewCard(title, link){
    
    const cardTemplate = document.querySelector("#photo__element").content;
    const cardElement = cardTemplate.cloneNode(true);   


    cardElement.querySelector(".photo__title").textContent = title;
    cardElement.querySelector(".photo__image").src = link;
    cardElement.querySelector(".photo__button").addEventListener("click", function(evt){            
        evt.target.classList.toggle("photo__button_active");
    });
    cardElement.querySelector(".photo__remove").addEventListener("click", function(item, evt){
        document.querySelector(".photo__elements").remove(cardElement.target); //somthing wrong
        
    });
    
    document.querySelector(".photo__elements").prepend(cardElement); 
}

function formSubmitHandler(evt){
    evt.preventDefault();
    console.log(evt.target.classList);
    if(evt.target.classList[1] === "edit_form"){
        profileTitle.textContent = placeNameInput.value;
        profileSubtitle.textContent = infoInput.value;
    }
    else{
        const newCardTitle = document.querySelector(".form__input_type_title");
        const newCardLink = document.querySelector(".form__input_type_link");
        addNewCard(newCardTitle.value, newCardLink.value);
        }
    
    closeBtnClick();   
}


editButton.addEventListener("click", editInfo);
addButton.addEventListener("click", addForm);

closeEditButton.addEventListener("click", closeBtnClick);
closeAddButton.addEventListener("click", closeBtnClick);

editForm.addEventListener("submit", formSubmitHandler);
createForm.addEventListener("submit", formSubmitHandler);