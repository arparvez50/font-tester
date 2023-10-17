let inputBox = document.querySelector(".input__box");
let previewBox = document.querySelector(".preview__here");
let formSelect = document.querySelector(".form__select");
let fontSize = document.querySelector('.font__size--range')
// Preview Input text
inputBox.addEventListener("input", function (event) {
  // console.log(event.target.value);
  previewBox.innerText = event.target.value;
});

// change font family with Select-Option
formSelect.addEventListener("change", function (event) {
  // console.log(event.target.value);
  previewBox.style.fontFamily = `${event.target.value}`;
});


// change font size by range
fontSize.addEventListener('change',function(event){
  // console.log(event.target.value);
  previewBox.style.fontSize = `${event.target.value}px`
})