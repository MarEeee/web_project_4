const container = document.querySelector(".page");
const form = document.querySelector(".form"); 
const editForm = document.querySelector(".edit_form"); 
const createForm = document.querySelector(".create_form");
const editButton = container.querySelector(".profile__edit-button");
const closeButton = container.querySelector(".form__close-button");
const saveButton = container.querySelector(".form__save-button");
const addNewCardButton = container.querySelector(".profile__add-button");
const titleInput = document.querySelector(".form__input_type_title");
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


function editInfo(){        
    editForm.classList.remove("disabled");    
    titleInput.setAttribute("value", profileTitle.textContent);
    infoInput.setAttribute("value", profileSubtitle.textContent);
    
}

function addNewCard(){
    createForm.classList.remove("disabled");
    
   
}


function closeBtnClick(){      

    form.classList.add("disabled");  
    createForm.classList.add("disabled"); 
}

function formSubmitHandler(evt){
    evt.preventDefault();
    profileTitle.textContent = titleInput.value;
    profileSubtitle.textContent = infoInput.value;
    closeBtnClick();   
}


// const photoTemplate = document.querySelector("#photo__element").content;
// console.log(photoTemplate);
// const photoElement = photoTemplate.clone(true);

// photoElement.querySelector(".photo__button").addEventListener("click", function(evt){
//     console.log(evt.target());
//     evt.target.classList.toggle("photo__like_active");
// });

editButton.addEventListener("click", editInfo);
closeButton.addEventListener("click", closeBtnClick);

closeButton.addEventListener("click", (evt)=> {
    closeBtnClick(evt);
});


addNewCardButton.addEventListener("click", addNewCard);

editForm.addEventListener("submit", formSubmitHandler);