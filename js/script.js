/***************   CONTAINS ERROR MESSAGES VARIABLES   **********************/
const invalidName = document.createElement('span');
invalidName.className="error";
invalidName.id="invalidName";
invalidName.textContent="Please enter a valid name";
//////////////////////////////////////////////////////
const invalidEmail = document.createElement('span');
invalidEmail.className="error";
invalidEmail.id="invalidEmail";
invalidEmail.textContent="Please enter a valid Email";
//////////////////////////////////////////////////////
const invalidCcNum = document.createElement('span');
invalidCcNum.className="error";
invalidCcNum.id="invalidCcNum";
invalidCcNum.textContent="Must be between 13 to 16 digits long";
//////////////////////////////////////////////////////
const invalidZip = document.createElement('span');
invalidZip.className="error";
invalidZip.id="invalidzip";
invalidZip.textContent="Not a valid Zipcode";
//////////////////////////////////////////////////////
const invalidCvv = document.createElement('span');
invalidCvv.className="error";
invalidCvv.id="invalidCvv";
invalidCvv.textContent="Input is not valid";
//////////////////////////////////////////////////////
const checkboxSelection = document.createElement('span');
checkboxSelection.className="error";
checkboxSelection.id="checkboxSelection";
checkboxSelection.textContent="Please check atleast one activity.";
//////////////////////////////////////////////////////
/***************  ENDS ERROR MESSAGES VARIABLES    **********************/





/*****************   OTHER VARIALBES   *********************************/
const select = document.getElementById('title');
let textField = document.getElementById('other-title').style.display = "none";  
const design = document.getElementById('design');
const colorElement = document.createElement('option');
///////////////////////////////////////////////////////////////////////////





/**************   CONTAINS INPUT FIELDS   *************************/
const name = document.getElementById('name');
const email = document.getElementById('mail');
const creditCardNumber = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
/////////////////////////////////////////////////////////





/*******   CREATING AND APPENDING DIV TO DOM   ************/
const activities = document.querySelector('.activities');
const activitieDiv = document.createElement('div');
activitieDiv.textContent="Total Cost: $";
activities.append(activitieDiv);
let divCost = 0;
//////////////////////////////////////////////////////////





/********   PAYMENT METHOD SELECTOR   ***************/
const paymentMethod = document.querySelector('option[value="select method"]');
paymentMethod.style.display-"none";
////////////////////////////////////////////////////////////////////////////





/***********************   PAYMENT OPTIONS   *********************/
const creditCard = document.querySelector('option[value="credit card"]');
const paypal = document.querySelector('option[value="paypal"]');
const bitcoin = document.querySelector('option[value="bitcoin"]');
const payment = document.getElementById('payment');
///////////////////////////////////////////////////////////





/*********************   PAYMENT DIV   ***************************/
const ccDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
const button = document.getElementsByTagName('button')[0];
/////////////////////////////////////////////////////////////////





/****************  SET ORIGNIAL DISPLAY OF OPTIONS   *******************/
creditCard.selected="true";
paypalDiv.style.display = "none";
bitcoinDiv.style.display = "none";
////////////////////////////////////////////////////////////////





/******* THIS SETS THE FOCUS ON THE NAME INPUT FIELD  ************/
function setFocusToTextBox(){
  document.getElementById("name").focus();
}
setFocusToTextBox();
//////////////////////////////////////////////////////////////





/***********   SHOW INPUT UPON "OTHER" OPTION SELECTION   **********/
select.addEventListener("change", function() {
  if(select.value === 'other') {
      document.getElementById('other-title').style.display = "block"; 
  } else {
      document.getElementById('other-title').style.display = "none"; 
  }
});
//////////////////////////////////////////////////////////////////



//            T SHIRT SECTION
/***********************************************************************/
//      HIDE SELECT THEME OPTION 
const hideShirtTheme = design.firstElementChild;
// hideShirtTheme.value="hide colors";
hideShirtTheme.hidden="true";
/////////////////////////////////////////////////////////////////////////




//      SET DEFAULT COLOR OPTION 
function changeColor() {
    //created an option with the var name colorElement
    colorElement.selected = true;
    colorElement.text="Please select a T-shirt theme";
    color.prepend(colorElement);
}
changeColor();
/////////////////////////////////////////////////////////////////////////




// HIDE COLOR OPTIONP DEFAULT TEXT
const shirtSelect = color.firstElementChild;
shirtSelect.hidden="true";
////////////////////////////////////////////////////////////////////





//JS Puns shirt only
const cornFlowerBLue = document.querySelector('option[value="cornflowerblue"]');
const darkSlateGrey = document.querySelector('option[value="darkslategrey"]');
const gold = document.querySelector('option[value="gold"]');
/////////////////////////////////////////////////////////////////////////




//I heart JS shirt only
const tomato = document.querySelector('option[value="tomato"]');
const steelBlue = document.querySelector('option[value="steelblue"]');
const dimGrey = document.querySelector('option[value="dimgrey"]');
/////////////////////////////////////////////////////////////////////////




//Hide color options until theme selected:
const themeColor = color;
themeColor.style.display="none";
/////////////////////////////////////////////////////////////////////////




// if Design is set to "js puns" show only js pun shirts.
// if Design is set to "heart js" show only heart js shirts.
design.addEventListener("change", (event) => {
    console.log(event.target.value);
    const color = document.getElementById('color');
    for(let i = 0; i < color.length; i ++){
        let alt = color[i];
        let val = event.target.value;
        console.log(alt);
        console.log(val);
        if (val === 'js puns') {
            themeColor.style.display="block";
            cornFlowerBLue.style.display="block";
            darkSlateGrey.style.display="block";
            gold.style.display="block";
            tomato.style.display="none";
            steelBlue.style.display="none";
            dimGrey.style.display="none";
          } else if (val === 'heart js'){
            themeColor.style.display="block";
            tomato.style.display="block";
            steelBlue.style.display="block";
            dimGrey.style.display="block";
            cornFlowerBLue.style.display="none";
            darkSlateGrey.style.display="none";
            gold.style.display="none";
          } 
        }
        console.log("The select element's change event listener is functional!");
});
//////////////////////////////////////////////////////////////////////


//                       CHECKBOX SECTION
//===============================================================================

/*****"Tuesday 9am-12pm"*****************/

const nameE = document.querySelector('input[name="express"]');
const nameJs = document.querySelector('input[name="js-frameworks"]');

nameE.onchange = function() {
    nameJs.disabled = !!this.checked;
  };

  nameJs.onchange = function() {
    nameE.disabled = !!this.checked;
  };

/*****"Tuesday 1pm-4pm"*****************/

const jsLibs = document.querySelector('input[name="js-libs"]');
const node = document.querySelector('input[name="node"]');

jsLibs.onchange = function() {
    node.disabled = !!this.checked;
  };

  node.onchange = function() {
    jsLibs.disabled = !!this.checked;
  };
//                      END OF T SHIRT SECTION
//===============================================================================





//                            PAYMENT OPTION
//===============================================================================
//hides payment option displays 
  bitcoin.style.display-"none";
  paypal.style.display-"none";
//------------------------------------
payment.addEventListener('change', () => {
  if (paypal.selected) {
    ccDiv.style.display="none";
    paypalDiv.style.display="block";
    bitcoinDiv.style.display="none";
  } else if (bitcoin.selected) {
    ccDiv.style.display="none";
    paypalDiv.style.display="none";
    bitcoinDiv.style.display="block";
  } else if (creditCard.selected) {
    ccDiv.style.display="block";
    paypalDiv.style.display="none";
    bitcoinDiv.style.display="none";
  }
});
//                            END OF PAYMENT OPTION
//===============================================================================




//                            VALIDATION FUNCTIONS
//===============================================================================
  //                NAME VALIDATION FUNCTION
//===============================================================================
function validateName(){
  // get value from name input
  const name = $("#name").val();
  const regexName = /^[A-Za-z]+\s?([A-Za-z]+)?$/; 
  if(regexName.test(name)){
      return true;
  } else{
      return false;
  }
}
 //                EMAIL VALIDATION FUNCTION
//===============================================================================
function validateEmail(){
  // get value from email input
  const email = $("#mail").val();
  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if(regexEmail.test(email)){
      return true;
  } else{
      return false;
  }
}
 //                CREDIT CARD NUMBER VALIDATION FUNCTION
//===============================================================================
function validateCardNumber(){
  // get value from card input
  const cardValue = $("#cc-num").val();
  const regexCardNumber = /^\d{13,16}$/;
  if(regexCardNumber.test(cardValue)){
      return true;
  } else{
      return false;
  }
}
 //               ZIPCODE VALIDATION FUNCTION
//===============================================================================
function validateZipCode(){
  // get zip code value
  const zipCodeValue = $("#zip").val();
  const regexZipCode = /^\d{5}$|^\d{5}-\d{4}$/;
  if(regexZipCode.test(zipCodeValue)){
      return true;
  } else{
      return false;
  }
}
 //               CVV VALIDATION FUNCTION
//===============================================================================
function validateCvvCode(){
  // get cvv code value
  const cvvValue = $("#cvv").val();
  const regexCvvCode = /^[0-9]{3,3}$/;
  if(regexCvvCode.test(cvvValue)){
      return true;
  } else{
      return false;
  }
}


//     ERROR
//ERROR
//     ERROR
$(document).ready(function(){
  $("#name").keyup(function(){
    if(validateName()){
        // if the user name is valid set the input text and border to green
        name.style.border = "2px solid green";
        invalidName.style.display = "none";
        return true;
    } else{
        // if the user name is not valid set the input text and border to red
        name.before(invalidName);
        invalidName.style.fontSize = "1em";
        invalidName.style.color = "red";
        name.style.border = "2px solid red";
        invalidName.style.display ="block";
        return false;  
    }
});

$("#mail").keyup(function(){
  if(validateEmail()){
      // if the user email is valid set the input text and border to red
      email.style.border = "2px solid green";
      invalidEmail.style.display = "none";
      return true;
  } else{
      // if the user email is not valid set the input text and border to red
      email.before(invalidEmail)
      invalidEmail.style.fontSize = "1em"
      invalidEmail.style.color = "red";
      email.style.border = "2px solid red";
      invalidEmail.style.display = "block";
      return false;   
  }
});

$("#cc-num").keyup(function(){
  if(validateCardNumber()){
      // if the user credit credit number is valid set the input text and border to green
      creditCardNumber.style.border = "2px solid green";
      invalidCcNum.style.display = "none";
      return true;
  } else{
      // if the user credit card number is not valid set the input text and border to red
      creditCardNumber.before(invalidCcNum)
      invalidCcNum.style.fontSize = "1em";
      invalidCcNum.style.color = "red";
      creditCardNumber.style.border = "2px solid red";
      invalidCcNum.style.display = "block";
      return false;   
  }
});

$("#zip").keyup(function(){
  if(validateZipCode()){
     // if the user zip code is valid set the input text and border to green
     zipcode.style.border = "2px solid green";
     invalidZip.style.display = "none";
     return true;
 } else{
     // if the user zip code is not valid set the input text and border to red
     zipcode.before(invalidZip)
     invalidZip.style.fontSize = "1em";
     invalidZip.style.color = "red";
     zipcode.style.border = "2px solid red";
     invalidZip.style.display = "block";
     return false;   
 }
});

$("#cvv").keyup(function(){
  if(validateCvvCode()){
      // if the user cvv code is valid set the input text and border to red
     cvv.style.border = "2px solid green";
     invalidCvv.style.display = "none";
     return true;
 } else{
     // if the user cvv code is not valid set the input text and border to red
     cvv.before(invalidCvv)
     invalidCvv.style.fontSize = "1em";
     invalidCvv.style.color = "red";
     cvv.style.border = "2px solid red";
     invalidCvv.style.display = "block";
     return false;   
 }
});
});
 //                END VALIDATION FUNCTION
//===============================================================================





 //                ERROR MESSAGES
//===============================================================================
//            NAME INPUT VALIDATION
const nameValidation = () => {
    //const $name = $('#name')
    if (name.length <= 0) {
        // checking of error when the length is greater than zero if there is an error
        if(name.length > 0) {
           return false;
        } else {
            // if the user name is not valid set the input text and border to red
            name.before(invalidName)
            invalidName.style.fontSize = "1em";
            invalidName.style.color = "red";
            name.style.border = "2px solid red";
            invalidName.style.display = "block";
            return false; 
        }
      }else {
        // remove all error when input is not empty
        //name.before()
            name.style.border = "2px solid green";
            invalidName.style.display = "none";
            return true;
    }
}

//          EMAIL INPUT VALIDATION
const emailValidation = () => {
    const $regexEmailExpresion = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // checking for valid email form the user
    const $isValidEmailExpresion = $regexEmailExpresion.test($email.val());
    if ($isValidEmailExpresion){
        // if the user email is valid set the input text and border to green
        $("#mail").before(/*liveValidEmailMessage*/)
        $("#mail").css("border", "2px solid green");
        invalidEmail.css("display","none");
        return true;
    } else {
        // checking if there is an error from the user
        if($('#error_email').length > 0) 
        {   return false;
        } else {
            // if the user email is not valid set the input text and border to red
            $("#mail").before(invalidEmail)
            invalidEmail.style.fontSize = "1em";
            invalidEmail.style.color = "red";
            $("#mail").css("border", "2px solid red");
            invalidEmail.css("display","block");
            return false;
        }
    }

}

//            CHECKBOX VALIDATION 
const checkboxValidation = () => {
    let $numChecked = 0;
    let $checkbox = $('.activities input[type="checkbox"]');
    const $legend = $('.activities legend');
    //loops through checkbox items to check for 'checked' property
    for (i = 0; i < $checkbox.length; i ++){ 
        if ($checkbox.eq(i).prop('checked')) {
            $numChecked = $numChecked + 1;
        } 
    }
    if ($numChecked < 1){
        if($('#error_activities').length > 0) 
        {   return false;
        } else { 
            $legend.after(checkboxSelection);
            return false;
        }
    } else {
        $('#error_activities').css({"display":"none"}); 
        return true;
    }
}


//            CREDIT CARD VALIDATION 
const creditCardValidaiton = () => {
    const $regexCardExpression = /^\d{13,16}$/; 
    // check if the credit card number is valid(bewteen 13 and 16 digits)
    const $isValidCardExpression = $regexCardExpression.test($cardNumber.val());
    if ($cardNumber.val().length > 0 && $isValidCardExpression == true){
        // if the user credit credit number is valid set the input text and border to red
        $("#cc-num").before()
        $("#cc-num").css("border", "2px solid green");
        invalidCcNum.css("display","none");
        return true;
    } else {
        if($('#error_credit_card').length > 0) 
        {   return false;
        } else {
        // if the user credit card number is not valid set the input text and border to red
        $("#cc-num").before(invalidCcNum)
        invalidCcNum.style.fontSize = "1em";
        invalidCcNum.style.color = "red";
        $("#cc-num").css("border", "2px solid red");
        invalidCcNum.css("display","block");
        return false;
        }
    }
}

//              ZIPCODE VALIDATION
const zipcodeValidation = () =>{
    const $regexZipCodeExpreesion = /^\d{5}$|^\d{5}-\d{4}$/;
    // checking for valid zipcode from user 
    const $isValidZipCode = $regexZipCodeExpreesion.test($zipCodeNumber.val());
    // if there is a valid input do not dispaly an error message 
    if ($zipCodeNumber.val().length > 0 && $isValidZipCode == true){
        // if the user zip code is valid set the input text and border to red
        $("#zip").before()
        $("#zip").css("border", "2px solid green");
        invalidZip.css("display","none");
        return true;
        // else, display an error message
    } else {
        if($('#error_zipcode').length > 0)
        {   return false;
        } else {
        // if the user zip code is not valid set the input text and border to red
        $("#zip").before(invalidZip)
        invalidZip.style.fontSize = "1em";
        invalidZip.style.color = "red";
        $("#zip").css("border", "2px solid red");
        invalidZip.css("display","block");
        return false; 
        }
    }
}

//              CVV VALIDATION
const cvvValidation = () => {
    const $regexCvvCodeExpreesion = /^[0-9]{3,3}$/;
    // checking if the cvv code is valid
    const $isValidCvvExpression = $regexCvvCodeExpreesion.test($cvvCode.val());
    if ($cvvCode.val().length > 0 && $isValidCvvExpression == true){
          // if the user cvv code is valid set the input text and border to red
        $("#cvv").before()
        $("#cvv").css("border", "2px solid green");
        invalidCvv.css("display","none");
        return true;
    } else {
        if($('#error_cvvcode').length > 0)
        {   return false;
        } else {
        // if the user cvv code is not valid set the input text and border to red
        $("#cvv").before(invalidCvv)
        invalidCvv.style.fontSize = "1em";
        invalidCvv.style.color = "red";
        $("#cvv").css("border", "2px solid red");
        invalidCvv.css("display","block");
        return false; 
        }
    }
}
 //                END ERROR MESSAGES
//===============================================================================





 //                ACTIVITIES SELECTION & COST CALCULATIONS
//===============================================================================
//check for atleast one selected event
let totalCost = 0;
let activitesChecked = 0;
activities.addEventListener('change' , function(e){
  
  const cost = parseInt(e.target.dataset.cost);
  //add total cost of selected and display at bottom of section
  if(e.target.checked){
    totalCost +=cost;
    activitesChecked += 1;
    activitieDiv.innerHTML=('Total Cost: $'+totalCost+'.');
    if(totalCost>0){
      totalCost.display="block";
    }
  }else{
    totalCost -= cost;
    activitesChecked -= 1;
    activitieDiv.innerHTML=('Total Cost: $'+totalCost+'.');
    if(totalCost===0){
      totalCost.display="none";
    }
  }
});

 //                END ACTIVITIES SELECTION & COST CALCULATIONS
//===============================================================================




 //                CHECK IF ALL VALIDATIONS ARE TRUE 
//===============================================================================

//      CANNOT GET THIS EVENT LISTENER TO WORK :(



const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function(event) {
  if (name.value === "") {
      document.innerHTML = invalidName;
      event.preventDefault();
  } 
  
  if (email.value === "") {
      document.innerHTML = invalidEmail;
      event.preventDefault();
  }
  
  if (activities.value === "") {
      document.innerHTML = checkboxSelection;
      event.preventDefault();
  }
  
  if (creditCardNumber.value === "") {
      document.innerHTML = invalidCcNum;
      event.preventDefault();
  }
  
  if (zipcode.value === "") {
      document.innerHTML = invalidZip;
      event.preventDefault();
  }
  
  if (cvv.value === "") {
      document.innerHTML = invalidCvv;
      event.preventDefault();
  }
  });
