const div = document.getElementById('container');
const select = document.getElementById('title');
let textField = document.getElementById('other-title').style.display = "none";  
const theme = document.getElementById('design');
const themeChi = document.getElementById('design').children;
const color = document.getElementById('color');
const colorElement = document.createElement('option');
const colorChi = document.getElementById('color').children;

//This sets the focus on the first input field
function setFocusToTextBox(){
    document.getElementById("name").focus();
}
setFocusToTextBox();


//Show input upon "other" option
select.addEventListener("change", function() {
    if(select.value === 'other') {
        document.getElementById('other-title').style.display = "block"; 
    } else {
        document.getElementById('other-title').style.display = "none"; 
    }
});


//hide Select Theme Option 
theme.addEventListener("change", function() {
    const shirtTheme = theme.firstElementChild;
    shirtTheme.style.display="none"
});


//set default color option 
function changeColor() {
    colorElement.selected = true;
    colorElement.text="Please select a T-shirt theme";
    color.prepend(colorElement);
}
changeColor();


//hide color option default text
color.addEventListener("change", function() {
    const shirtSelect = color.firstElementChild;
    shirtSelect.style.display="none"
});


//hides the children in the drop down menu
function appleseed(){
    for(let i = 0; i < colorChi.length; i ++) {
        colorChi[i].style.display="none";
    }
}
appleseed();

//
//
// trying to show colors based on #design selection
theme.addEventListener("change", function() {
    for (let i = 0; i < theme.length; i ++){
        if (theme[i] === 1){
            colorChi.style.display="block";
        }
    }
});

    

