/***************   CONTAINS ERROR MESSAGES VARIABLES   *********************/
const invalidName = document.createElement('span');                        //
invalidName.className="error";                                             //
invalidName.id="invalidName";                                              //
invalidName.textContent="Please enter a valid name";                       //
//=========================================================================//
const invalidEmail = document.createElement('span');                       //
invalidEmail.className="error";                                            //
invalidEmail.id="invalidEmail";                                            //
invalidEmail.textContent="Please enter a valid Email";                     //
//=========================================================================//
const emptyEmail = document.createElement('span');                         //
emptyEmail.className="error";                                              //
emptyEmail.id="emptyEmail";                                                //
emptyEmail.textContent="Email is required";                                //
//=========================================================================//
const invalidCcNum = document.createElement('span');                       //
invalidCcNum.className="error";                                            //
invalidCcNum.id="invalidCcNum";                                            //
invalidCcNum.textContent="Must be between 13 to 16 digits long";           //
//=========================================================================//
const invalidZip = document.createElement('span');                         //
invalidZip.className="error";                                              //
invalidZip.id="invalidzip";                                                //
invalidZip.textContent="Not a valid Zipcode";                              //
//=========================================================================//
const invalidCvv = document.createElement('span');                         //
invalidCvv.className="error";                                              //
invalidCvv.id="invalidCvv";                                                //
invalidCvv.textContent="Input is not valid";                               //
//=========================================================================//
const checkboxSelection = document.createElement('span');                  //
checkboxSelection.className="error";                                       //
checkboxSelection.id="checkboxSelection";                                  //
checkboxSelection.textContent="Please check atleast one activity.";        //
/***************  ENDS ERROR MESSAGES VARIABLES    *************************/

/*****************   OTHER VARIALBES   ******************************************/
const select = document.getElementById('title');                                //
let textField = document.getElementById('other-title').style.display = "none";  // 
const design = document.getElementById('design');                               //
const colorElement = document.createElement('option');                          //
/*****************   ENDS OTHER VARIALBES   *************************************/

/**************   CONTAINS INPUT FIELDS   *********************/
const name = document.getElementById('name');                 //
const email = document.getElementById('mail');                //
const creditCardNumber = document.getElementById('cc-num');   //
const zipcode = document.getElementById('zip');               //
const cvv = document.getElementById('cvv');                   //
/******************   END INPUT FIELDS   **********************/

/*******   CREATING AND APPENDING DIV TO DOM   ************/
const activities = document.querySelector('.activities'); //
const activitieDiv = document.createElement('div');       //
activitieDiv.textContent="Total Cost: $";                 //
activities.append(activitieDiv);                          //
let divCost = 0;                                          //
/*******   END CREATING AND APPENDING DIV TO DOM   ********/

/*******************   PAYMENT METHOD SELECTOR   ********************************/
const paymentMethod = document.querySelector('option[value="select method"]');  //
paymentMethod.style.display-"none";                                             //
/*******************   END PAYMENT METHOD SELECTOR   ****************************/

/***********************   PAYMENT OPTIONS   ******************************/
const creditCard = document.querySelector('option[value="credit card"]'); //
const paypal = document.querySelector('option[value="paypal"]');          //
const bitcoin = document.querySelector('option[value="bitcoin"]');        //
const payment = document.getElementById('payment');                       //
/***********************   END PAYMENT OPTIONS   **************************/

/*********************   PAYMENT DIV   **********************/
const ccDiv = document.getElementById('credit-card');       //
const paypalDiv = document.getElementById('paypal');        //
const bitcoinDiv = document.getElementById('bitcoin');      //
const button = document.getElementsByTagName('button')[0];  //
const form = document.querySelector('form');                //
/*********************   END PAYMENT DIV   ******************/

/*****  SET ORIGNIAL DISPLAY OF OPTIONS   *****/
creditCard.selected="true";                   //
paypalDiv.style.display = "none";             //
bitcoinDiv.style.display = "none";            //
/**********  END DISPLAY OF OPTIONS   *********/

/******* THIS SETS THE FOCUS ON THE NAME INPUT FIELD  ************/
function setFocusToTextBox(){                                    //
  document.getElementById("name").focus();                       //
}                                                                //
setFocusToTextBox();                                             //
/************ END FOCUS ON THE NAME INPUT FIELD  *****************/

/***********   SHOW INPUT UPON "OTHER" OPTION SELECTION   ***************/
select.addEventListener("change", function() {                          //
  if(select.value === 'other') {                                        //
      document.getElementById('other-title').style.display = "block";   //
  } else {                                                              //
      document.getElementById('other-title').style.display = "none";    //
  }                                                                     //
});                                                                     //
/***********   SHOW INPUT UPON "OTHER" OPTION SELECTION   ***************/

/*************************  T SHIRT SECTION ***************************************************/
//============ HIDE SELECT THEME OPTION ============//                                        //
const hideShirtTheme = design.firstElementChild;    //                                        //
// hideShirtTheme.value="hide colors";              //                                        //
hideShirtTheme.hidden="true";                       //                                        //
//==================================================//                                        //
                                                                                              //                                                                                                                                                                                           //
//================== SET DEFAULT COLOR OPTION ============//                                  //
function changeColor() {                                  //                                  //
    //created an option with the var name colorElement    //                                  //
    colorElement.selected = true;                         //                                  //
    colorElement.text="Select a color";                   //                                  //
    color.prepend(colorElement);                          //                                  //
}                                                         //                                  //
changeColor();                                            //                                  //
//========================================================//                                  //
                                                                                              //                                                                                              
//======== HIDE COLOR OPTION DEFAULT TEXT ========//                                          //
const shirtSelect = color.firstElementChild;      //                                          //
shirtSelect.hidden="true";                        //                                          //
//============= END DEFAULT TEXT =================//                                          //
                                                                                              //                                                                                                                                                                                           //
//=========================== JS PUNS SHIRT ONLY ====================================/        //
const cornFlowerBLue = document.querySelector('option[value="cornflowerblue"]');    //        //
const darkSlateGrey = document.querySelector('option[value="darkslategrey"]');      //        //
const gold = document.querySelector('option[value="gold"]');                        //        //
//======================== END JS PUNS SHIRT ONLY ===================================/        //
                                                                                              //
//=========================== I HEART JS SHIRT ONLY ============================/             //
const tomato = document.querySelector('option[value="tomato"]');               //             //
const steelBlue = document.querySelector('option[value="steelblue"]');         //             //
const dimGrey = document.querySelector('option[value="dimgrey"]');             //             //
//======================== END I HEART JS SHIRT ONLY ===========================/             //
                                                                                              //
//======== HIDE COLOR OPTIONS UNTIL THEME SELECTED ========//                                 //
const themeColor = color;                                  //                                 //
themeColor.style.display="none";                           //                                 //
//============== END HIDE COLOR OPTIONS  ==================//                                 //
                                                                                              //
/***************** T SHIRT DESIGN CHANGE *************************/                           //
// if Design is set to "js puns" show only js pun shirts.         //                          //
// if Design is set to "heart js" show only heart js shirts.      //                          //
design.addEventListener("change", (event) => {                    //                          //
    console.log(event.target.value);                              //                          //
    colorElement.selected = true;                                 //                          //
    colorElement.text="Select a color";                           //                          //
    const color = document.getElementById('color');               //                          //
    for(let i = 0; i < color.length; i ++){                       //                          //
        let alt = color[i];                                       //                          //
        let val = event.target.value;                             //                          //
        console.log(alt);                                         //                          //
        console.log(val);                                         //                          //
        if (val === 'js puns') {                                  //                          //
            colorElement.selected = true;                         //                          //
            themeColor.style.display="block";                     //                          //
            cornFlowerBLue.style.display="block";                 //                          //
            darkSlateGrey.style.display="block";                  //                          //
            gold.style.display="block";                           //                          //
            tomato.style.display="none";                          //                          //
            steelBlue.style.display="none";                       //                          //
            dimGrey.style.display="none";                         //                          //
          } else if (val === 'heart js'){                         //                          //
            colorElement.selected = true;                         //                          //
            themeColor.style.display="block";                     //                          //
            tomato.style.display="block";                         //                          //
            steelBlue.style.display="block";                      //                          //
            dimGrey.style.display="block";                        //                          //
            cornFlowerBLue.style.display="none";                  //                          //
            darkSlateGrey.style.display="none";                   //                          //
            gold.style.display="none";                            //                          //
          }                                                       //                          //
        }                                                         //                          //
});                                                               //                          //
/***************** END T SHIRT DESIGN CHANGE **********************/                          //
/*************************  END T SHIRT SECTION ***********************************************/


/******************************** ACTIVITY SELECTION ********************************/                          
                                                                                    //
//========================== Tuesday 9am-12pm ===========================//         //
const nameE = document.querySelector('input[name="express"]');           //         //
const nameJs = document.querySelector('input[name="js-frameworks"]');    //         //
nameE.onchange = function() {                                            //         //
    nameJs.disabled = !!this.checked;                                    //         //
  };                                                                     //         //
  nameJs.onchange = function() {                                         //         //
    nameE.disabled = !!this.checked;                                     //         //
  };                                                                     //         //
//=======================================================================//         //
                                                                                    //
//========================== Tuesday 1pm-4pm ===========================//          //
const jsLibs = document.querySelector('input[name="js-libs"]');         //          //
const node = document.querySelector('input[name="node"]');              //          //
jsLibs.onchange = function() {                                          //          //
    node.disabled = !!this.checked;                                     //          //
  };                                                                    //          //
  node.onchange = function() {                                          //          //
    jsLibs.disabled = !!this.checked;                                   //          //
  };                                                                    //          //
//======================================================================//          //
                                                                                    //
//===========  ACTIVITIES SELECTION & COST CALCULATIONS ==============//            //
//check for atleast one selected event                                //            //
let totalCost = 0;                                                    //            //
let activitesChecked = 0;                                             //            //
activities.addEventListener('change' , function(e){                   //            //
  const cost = parseInt(e.target.dataset.cost);                       //            //
  //add total cost of selected and display at bottom of section       //            //
  if(e.target.checked){                                               //            //
    totalCost +=cost;                                                 //            //
    activitesChecked += 1;                                            //            //
    activitieDiv.innerHTML=('Total Cost: $'+totalCost+'.');           //            //
    if(totalCost>0){                                                  //            //
      totalCost.display="block";                                      //            //
    }                                                                 //            //
  }else{                                                              //            //
    totalCost -= cost;                                                //            //
    activitesChecked -= 1;                                            //            //
    activitieDiv.innerHTML=('Total Cost: $'+totalCost+'.');           //            //
    if(totalCost===0){                                                //            //
      totalCost.display="none";                                       //            //
    }                                                                 //            //
  }                                                                   //            //
});                                                                   //            //
//=========  END ACTIVITIES SELECTION & COST CALCULATIONS ============//            //
                                                                                    //
/******************************** END ACTIVITY SELECTION ****************************/                          


/*************** PAYMENT OPTION *****************/
//======== hides payment option displays =======//
  bitcoin.style.display-"none";                 //
  paypal.style.display-"none";                  //
//--------------------------------------------- //
payment.addEventListener('change', () => {      //
  if (paypal.selected) {                        //
    ccDiv.style.display="none";                 //
    paypalDiv.style.display="block";            //
    bitcoinDiv.style.display="none";            //
  } else if (bitcoin.selected) {                //
    ccDiv.style.display="none";                 //
    paypalDiv.style.display="none";             //
    bitcoinDiv.style.display="block";           //
  } else if (creditCard.selected) {             //
    ccDiv.style.display="block";                //
    paypalDiv.style.display="none";             //
    bitcoinDiv.style.display="none";            //
  }                                             //
});                                             //
/*************** END PAYMENT OPTION *************/
 


/*************************  VALIDATE FUNCTIONS ******************************************/
                                                                                        //                                                                                        
//=============== NAME VALIDATION FUNCTION =============//                              //
function validateName(){                                //                              //
  // get value from name input                          //                              //
  const name = $("#name").val();                        //                              //
  const regexName = /^[A-Za-z]+\s?([A-Za-z]+)?$/;       //                              //
  if(regexName.test(name)){                             //                              //
      return true;                                      //                              //
  } else{                                               //                              //
      return false;                                     //                              //
  }                                                     //                              //
}                                                       //                              //
//========== END NAME VALIDATION FUNCTION ==============//                              //
                                                                                        //                                                                                        
//=================== EMAIL VALIDATION FUNCTION ============================//          //
function validateEmail(){                                                   //          //
  // get value from email input                                             //          //
  const email = $("#mail").val();                                           //          //
  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;      //          //
  if(regexEmail.test(email)){                                               //          //
      return true;                                                          //          //
  } else if (email === "") {                                                //          //
      return false;                                                         //          //
  }                                                                         //          //
}                                                                           //          //
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  //          //
function isEmptyEmail(obj){                                                 //          //
  if(obj.val() == '') return true;                                          //          //
  else return false;                                                        //          //
}                                                                           //          //
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  //          //
$("form").submit(function(e){                                               //          //
     let email = $("#mail");                                                //          //
   if(isEmptyEmail(email)){                                                 //          //
       e.preventDefault();                                                  //          //
       // if the user email is valid set the input text and border to red   //          //
       //invalidEmail.style.border = "2px solid green";                     //          //
       invalidEmail.style.display = "none";                                 //          //
       email.focus();                                                       //          //
       email.before(emptyEmail);                                            //          //
       emptyEmail.style.fontSize = "2em"                                    //          //
       emptyEmail.style.color = "red";                                      //          //
       //emptyEmail.style.border = "2px solid red";                         //          //
       emptyEmail.style.display = "block";                                  //          //
       return true;                                                         //          //
   }else if(!validateEmail()){                                              //          //
       e.preventDefault();                                                  //          //
      // if the user email is valid set the input text and border to red    //          //
       //emptyEmail.style.border = "2px solid green";                       //          //
       emptyEmail.style.display = "none";                                   //          //
                                                                            //          //
       email.before(invalidEmail);                                          //          //
                                                                            //          //
       invalidEmail.style.fontSize = "1em"                                  //          //
       invalidEmail.style.color = "red";                                    //          //
       //invalidEmail.style.border = "2px solid red";                       //          //
       invalidEmail.style.display = "block";                                //          //
      return true;                                                          //          //
  } else{                                                                   //          //
       //invalidEmail.style.border = "2px solid green";                     //          //
       invalidEmail.style.display = "none";                                 //          //
       //emptyEmail.style.border = "2px solid green";                       //          //
       emptyEmail.style.display = "none";                                   //          //
       return false;                                                        //          //
   }                                                                        //          //
});                                                                         //          //
//=================== EMAIL VALIDATION FUNCTION ============================//          //
                                                                                        //                                                                                        
//====== CREDIT CARD NUMBER VALIDATION FUNCTION =====//                                 //
function validateCardNumber(){                       //                                 //
  // get value from card input                       //                                 //
  const cardValue = $("#cc-num").val();              //                                 //
  const regexCardNumber = /^\d{13,16}$/;             //                                 //
  if(regexCardNumber.test(cardValue)){               //                                 //
      return true;                                   //                                 //
  } else{                                            //                                 //
      return false;                                  //                                 //
  }                                                  //                                 //
}                                                    //                                 //
//====== END CARD NUMBER VALIDATION FUNCTION ========//                                 //
                                                                                        //                                                                                        
//========== ZIPCODE VALIDATION FUNCTION ==============//                               //
function validateZipCode(){                            //                               //
  // get zip code value                                //                               //
  const zipCodeValue = $("#zip").val();                //                               //
  const regexZipCode = /^\d{5}$|^\d{5}-\d{4}$/;        //                               //
  if(regexZipCode.test(zipCodeValue)){                 //                               //
      return true;                                     //                               //
  } else{                                              //                               //
      return false;                                    //                               //
  }                                                    //                               //
}                                                      //                               //
//========== END ZIPCODE VALIDATION FUNCTION ==========//                               //
                                                                                        //                                                                                        
//======== CVV VALIDATION FUNCTION =========//                                          //
function validateCvvCode(){                 //                                          //
  // get cvv code value                     //                                          //
  const cvvValue = $("#cvv").val();         //                                          //
  const regexCvvCode = /^[0-9]{3,3}$/;      //                                          //
  if(regexCvvCode.test(cvvValue)){          //                                          //
      return true;                          //                                          //
  } else{                                   //                                          //
      return false;                         //                                          //
  }                                         //                                          //  
}                                           //                                          //
//====== END CVV VALIDATION FUNCTION =======//                                          //
                                                                                        //                                                                                        
//=============== ACTIVITIE VALIDATION FUNCTION ======================//                //
function validateActivities() {                                       //                //
  const box = document.querySelectorAll('input[type="checkbox"]');    //                //
    for (let i = 0; i < box.length; i ++) {                           //                //
        if(box[i].checked === true) {                                 //                //
            activities.style.border = "2px solid green";              //                //
            checkboxSelection.style.display = "none"                  //                //
            return true;                                              //                //
        } else if (box[i].checekd === false) {                        //                //
          return false;                                               //                //
        }                                                             //                //
    }                                                                 //                //
 }                                                                    //                //
//=============== ACTIVITIE VALIDATION FUNCTION ======================//                //
                                                                                        //                                                                                        
/*************************  END VALIDATE FUNCTIONS **************************************/

/*************************  ERROR FUNCTIONS ***************************************************/
$(document).ready(function(){                                                                 //
                                                                                              //
  activities.addEventListener('change', function() {                                          //
      if(validateActivities()) {                                                              //
      activities.style.border = "2px solid green";                                            //
      checkboxSelection.style.display = "none";                                               //
      return true;                                                                            //
    }                                                                                         //
    else {                                                                                    //
      activities.before(checkboxSelection);                                                   //
      checkboxSelection.style.fontSize = "1em";                                               //
      checkboxSelection.style.color = "red";                                                  //
      activities.style.border = "2px solid red";                                              //
      checkboxSelection.style.display ="block";                                               //
      return false;                                                                           //
    }                                                                                         //
  });                                                                                         //
    //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //
  $("#name").keyup(function(){                                                                //
    if(validateName()){                                                                       //
        // if the user name is valid set the input text and border to green                   //
        name.style.border = "2px solid green";                                                //
        invalidName.style.display = "none";                                                   //
        return true;                                                                          //
    } else{                                                                                   //
        // if the user name is not valid set the input text and border to red                 //
        name.before(invalidName);                                                             //  
        invalidName.style.fontSize = "1em";                                                   //
        invalidName.style.color = "red";                                                      //
        name.style.border = "2px solid red";                                                  //
        invalidName.style.display ="block";                                                   //
        return false;                                                                         //
    }                                                                                         //
});                                                                                           //
    //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //
    $("#mail").keyup(function(){                                                              //
  if(validateEmail()){                                                                        //
      // if the user email is valid set the input text and border to red                      //
      email.style.border = "2px solid green";                                                 //
      invalidEmail.style.display = "none";                                                    //
      return true;                                                                            //
  } else{                                                                                     //
      // if the user email is not valid set the input text and border to red                  //
      email.before(invalidEmail);                                                             //
      invalidEmail.style.fontSize = "1em"                                                     //
      invalidEmail.style.color = "red";                                                       //
      email.style.border = "2px solid red";                                                   //
      invalidEmail.style.display = "block";                                                   //
      return false;                                                                           //
  }                                                                                           //
});                                                                                           //
    //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //
$("#cc-num").keyup(function(){                                                                //
  if(validateCardNumber()){                                                                   //
      // if the user credit credit number is valid set the input text and border to green     //
      creditCardNumber.style.border = "2px solid green";                                      //
      invalidCcNum.style.display = "none";                                                    //
      return true;                                                                            //
  } else{                                                                                     //
      // if the user credit card number is not valid set the input text and border to red     //
      creditCardNumber.before(invalidCcNum)                                                   //
      invalidCcNum.style.fontSize = "1em";                                                    //
      invalidCcNum.style.color = "red";                                                       //
      creditCardNumber.style.border = "2px solid red";                                        //
      invalidCcNum.style.display = "block";                                                   //
      return false;                                                                           //
  }                                                                                           //
});                                                                                           //
    //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //
$("#zip").keyup(function(){                                                                   //
  if(validateZipCode()){                                                                      //
     // if the user zip code is valid set the input text and border to green                  //
     zipcode.style.border = "2px solid green";                                                //
     invalidZip.style.display = "none";                                                       //
     return true;                                                                             //
 } else{                                                                                      //
     // if the user zip code is not valid set the input text and border to red                //
     zipcode.before(invalidZip)                                                               //
     invalidZip.style.fontSize = "1em";                                                       //
     invalidZip.style.color = "red";                                                          //
     zipcode.style.border = "2px solid red";                                                  //
     invalidZip.style.display = "block";                                                      //
     return false;                                                                            //
 }                                                                                            //
});                                                                                           //
    //= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = //
$("#cvv").keyup(function(){                                                                   //
  if(validateCvvCode()){                                                                      //
      // if the user cvv code is valid set the input text and border to red                   //
     cvv.style.border = "2px solid green";                                                    //
     invalidCvv.style.display = "none";                                                       //
     return true;                                                                             //
 } else{                                                                                      //
     // if the user cvv code is not valid set the input text and border to red                //
     cvv.before(invalidCvv)                                                                   //
     invalidCvv.style.fontSize = "1em";                                                       //
     invalidCvv.style.color = "red";                                                          //
     cvv.style.border = "2px solid red";                                                      //
     invalidCvv.style.display = "block";                                                      //
     return false;                                                                            //
 }                                                                                            //
});                                                                                           //
});                                                                                           //
/*************************  END ERROR FUNCTIONS ***********************************************/

/********************** FORM VALIDATION *********************/
form.addEventListener('submit', (event) => {                //
  event.preventDefault();                                   //
                                                            //
  if (!validateEmail()) {                                   //
    email.before(invalidEmail);                             //
    // invalidEmail.style.fontSize = "1em";                 //
    // invalidEmail.style.color = "red";                    //
    email.style.border = "2px solid red"                    //
  }                                                         //
                                                            //
  if (!validateCardNumber()) {                              //
    creditCardNumber.before(invalidCcNum);                  //
    invalidCcNum.style.fontSize = "1em";                    //
    invalidCcNum.style.color = "red";                       //
    creditCardNumber.style.border = "2px solid red"         //
  }                                                         //
                                                            //
  if (!validateName()) {                                    //
    name.before(invalidName);                               //
    invalidName.style.fontSize = "1em";                     //
    invalidName.style.color = "red";                        //
    name.style.border = "2px solid red";                    //   
  }                                                         //
                                                            //
  if (!validateCvvCode()) {                                 //
    cvv.before(invalidCvv);                                 //
    invalidCvv.style.fontSize = "1em";                      //
    invalidCvv.style.color = "red";                         //
    cvv.style.border = "2px solid red"                      //
  }                                                         //
                                                            //
  if (!validateZipCode()) {                                 //
    zip.before(invalidZip);                                 //
    invalidZip.style.fontSize = "1em";                      //
    invalidZip.style.color = "red";                         //
    zip.style.border = "2px solid red"                      //
  }                                                         //
                                                            //
  if (!validateName()) {                                    //
    name.before(invalidName);                               //
    invalidName.style.fontSize = "1em";                     //
    invalidName.style.color = "red";                        //
    name.style.border = "2px solid red"                     //
  }                                                         //
                                                            //
  if (!validateActivities()) {                              //
    activities.before(checkboxSelection);                   //
    checkboxSelection.style.fontSize = "1em";               //
    checkboxSelection.style.color = "red";                  //
    activities.style.border = "2px solid red"               //
  }                                                         //
                                                            ////////////////////////////////////////////////////////////////////////////////////
  if(validateName() && validateEmail() && validateCardNumber() && validateCvvCode() && validateZipCode() && validateActivities() === true){   //
    form.submit();                                                                                                                            //
  }                                                                                                                                           //
  if (paypal.selected && !validateName() && !validateEmail() && !validateActivities()) {                                                      //
    event.preventDefault();                                                                                                                   //
  } else if (paypal.selected && validateName() && validateEmail() && validateActivities()){                                                   //
    form.submit();                                                                                                                            //
  }                                                                                                                                           //
  if (bitcoin.selected && !validateName() && !validateEmail() && !validateActivities()) {                                                     //
    event.preventDefault();                                                                                                                   //
  } else if (bitcoin.selected && validateName() && validateEmail() && validateActivities()){                                                  //
    form.submit();                                                                                                                            //
  }                                                                                                                                           //
})                                                                                                                                            //    
/******************************************** END FORM VALIDATION *****************************************************************************/
