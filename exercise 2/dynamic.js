// =================================================================
//     Boot camp exercise 2 - dynamic form fields
//     Author: Siyuan Zhao
//     CS422 Spring 2024
// =================================================================

let formfield = document.getElementById('formfield');

function add(){
  let newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','text');
  newField.setAttribute('class','text');
  newField.setAttribute('size',50);
  newField.setAttribute('placeholder','Optional Field');
  formfield.appendChild(newField);
}

function remove(){
  let input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 2) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
  }
}