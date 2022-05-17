import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const URL = "https://restcountries.com/v2/name/peru";


function fetchCountries(name) {
   return fetch(URL).then(response => {
       if(!response.ok) {
           throw new Error(response.status);
       }
       console.log(response.json());
       return response.json();
   }).then(name => {
       console.log(name); 
   }).catch(error => error.message);
};


fetchCountries();


// const searchParams = new URLSearchParams {
//     // "name.official": name.official,
//     "capital": capital,
//     // "flag":flags.svg,

//     languages,

// }

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

function markUpList() {
    return` 
    <li></li>`

}

function markUpDiv(){
    return `
    <img>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    
    `
}