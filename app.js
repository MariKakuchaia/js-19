const userForm = document.querySelector("#user-form");

const personalNum = document.querySelector("#personal-num");
const mobileNum = document.querySelector("#mobile-num");
// const position= document.querySelector("#position");

const personalError = document.querySelector("#personal-error");
const mobileError = document.querySelector("#mobile-error");
// const positionError = document.querySelector("#position-error");

userForm.addEventListener("submit", e =>{
    e.preventDefault();
    
    if(!personalNum.validity.valid){
        personalNum.classList.add('error');
        if(personalNum.validity.tooShort){
           personalError.innerText = 'personal number must have 11 number';
        }else{
            personalError.innerText = '';
        }
    }else{
        personalNum.classList.replace('error', 'success');
        personalError.innerText = '';
    }
  


    if(!mobileNum.validity.valid){
        mobileNum.classList.add('error');
        if(mobileNum.validity.tooShort){
            mobileError.innerText = 'Mobile number must be 9 length';
        }else{
            mobileError.innerText = '';
        }
    }else{
        mobileNum.classList.replace('error', 'success');
        mobileError.innerText = '';
    }

})

