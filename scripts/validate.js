const settingObject = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input_error_active"
  }; 

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement);
    inputElement.classList.add(inputErrorClass);
    // Show the error message
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass); 
};                       
                   

  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
    inputElement.classList.remove(settingObject.inputErrorClass);
    // Hide the error message
    errorElement.classList.remove(settingObject.errorClass);
    errorElement.textContent = "";
  };


const isValid = (formElement, inputElement) => {      
    if(!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage, settingObject.inputErrorClass, settingObject.errorClass);
        
    }else{
        hideInputError(formElement, inputElement);
    }
}



const enableValidation = (settingObject) => {
    const formList = Array.from(document.querySelectorAll(settingObject.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) =>{
            evt.preventDefault();
        });
        setEventListeners(formElement, settingObject.inputSelector, settingObject.submitButtonSelector);
    });
}


const setEventListeners = (formElement, inputSelector, submitButtonSelector) => {  //Adding Handlers to All Form Fields
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);    
    if(!formElement.classList.contains('edit_form')){
        toggleButtonState(inputList, buttonElement);
    }
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            isValid(formElement, inputElement);            
            toggleButtonState(inputList, buttonElement);
        });
    });
}

const hasInvalidInput = (inputList) => {    
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

function disabledButton(button){
     button.classList.add(settingObject.inactiveButtonClass);
     button.setAttribute("disabled", "disabled");  
}

function activeButton(button){
    button.classList.remove(settingObject.inactiveButtonClass); 
    button.removeAttribute("disabled");  
}

const toggleButtonState = (inputList, buttonElement) =>{
    
    if(hasInvalidInput(inputList)){
        disabledButton(buttonElement);                   
        
    }else{
        activeButton(buttonElement);   
    }
}

enableValidation(settingObject);
