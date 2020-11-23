const settingObject = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input_error_active"
  }; 

console.log(settingObject);


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(settingObject.inputErrorClass);
    // Show the error message
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settingObject.errorClass);
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
        showInputError(formElement, inputElement, inputElement.validationMessage);
        
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
        setEventListeners(formElement);
    });
}


const setEventListeners = (formElement) => {  //Adding Handlers to All Form Fields
    const inputList = Array.from(formElement.querySelectorAll(settingObject.inputSelector));
    const buttonElement = formElement.querySelector(settingObject.submitButtonSelector);    
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

const toggleButtonState = (inputList, buttonElement) =>{
    
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(settingObject.inactiveButtonClass);       
        
    }else{
        buttonElement.classList.remove(settingObject.inactiveButtonClass);        
    }
}

enableValidation(settingObject);
