export const validateTextField = (value: string) => {
    let isValid = true;
    if(value === ''){
      isValid = false; 
    }else{
      isValid = true;
    }
    return isValid;
  }