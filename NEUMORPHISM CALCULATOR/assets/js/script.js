let input =  document.getElementById('ip-box');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         $(button).addClass('clicked');

//         setTimeout( function () {
//             $(button).removeClass('clicked');
//         } , 70);

//         if (e.target.innerHTML === '=') {
//             string = eval(string);
//             input.value = string;
//         } 
//         else if (e.target.innerHTML === 'AC') {
//             string = "";
//             input.value = string;
//         } 
//         else if (e.target.innerHTML === 'DEL') {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         } 
//         else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     });
// });

arr.forEach(button => {
        button.addEventListener('click', (e) => {

        let btnValue = e.target.innerHTML;

        $(button).addClass('clicked');

        setTimeout( function () {
            $(button).removeClass('clicked');
        } , 70);

        if (btnValue === '=') {
            string = eval(string);
            input.value = string;
        } 
        else if (btnValue === 'AC') {
            string = "";
            input.value = string;
        } 
        else if (btnValue === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (isOperator(btnValue)) {
            if (isOperator(string[string.length - 1])) {
                string = string.slice(0, -1) + btnValue;
            } else {
                string += btnValue;
            }
            input.value = string;
        } else {
            string += btnValue;
            input.value = string;
        }
    });
});

function isOperator(value) {
    return value === '+' || value === '-' || value === '*' || value === '/' || value === '%';
}