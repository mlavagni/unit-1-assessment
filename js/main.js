let divEl = document.querySelector('div')
let inputEl = document.getElementById('textArea')
let labelEl = document.getElementById('label')
let btnAddEl = document.getElementById('add')
let btnSubstractEl = document.getElementById('substract')





// buttonEl1.addEventListener('click', function(evt) {
//     if (evt.target.textContent === "+")
//     {
//         labelEl.textContent =  inputEl.value
//     }
// });
// buttonEl2.addEventListener('click', substract)

  



   let buttonEl1 = document.createElement('button');
   buttonEl1.setAttribute("id","add");
   buttonEl1.textContent = '+';

   let inputEl2 = document.createElement('input');
   inputEl2.setAttribute("id","textArea");
   inputEl2.setAttribute("value","1");
   inputEl2.textContent = '-';

   let buttonEl2 = document.createElement('button');
    buttonEl2.setAttribute("id","substract");
    buttonEl2.textContent = '-';

   divEl.appendChild(buttonEl1);
   divEl.appendChild(inputEl2);
   divEl.appendChild(buttonEl2);

   buttonEl1.addEventListener('click', function(evt) {
    if (evt.target.textContent === "+")
    {
        labelEl.textContent =  parseInt(labelEl.textContent) + parseInt(inputEl2.value)
    }
});


buttonEl2.addEventListener('click', substract)

function substract(){
    labelEl.textContent =  (labelEl.textContent-inputEl2.value)
}