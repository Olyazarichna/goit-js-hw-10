import './css/styles.css';
import Notiflix from 'notiflix';
import debaunce from 'lodash.debounce';
import countryCard from './templates/country-card.hbs';
import countryList from './templates/country-list.hbs';

import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const refs = {
  listEl: document.querySelector('.country-list'),
  divEl: document.querySelector('.country-info'),
  inputEl: document.querySelector('#search-box'),
};

refs.inputEl.addEventListener('input', debaunce(onInputField, DEBOUNCE_DELAY));

function onInputField(event) {
  event.preventDefault();

  console.log(refs.inputEl.value);
  const inputValue = refs.inputEl.value;

  if (inputValue === '') {
    refs.listEl.innerHTML = '';
    refs.divEl.innerHTML = '';
    return;
  }

  fetchCountries(inputValue).then(country => {
    console.log(country.length);

    if (country.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (country.length > 2 || country.length < 10) {
      fetchCountries(inputValue)
        .then(renderLisrCard)
        .catch(error => error.message);
    } else {fetchCountries(inputValue).then(renderCountryCard);
    
        
    }
  });
}
     

function catchError(error) {
  console.log(error);
  return Notiflix.Notify.failure('Oops, there is no country with that name');
}

function renderCountryCard(name) {
  const markUp = countryCard(name);
  refs.divEl.innerHTML = markUp;
}

function renderLisrCard() {
  const markUp = countries
    .map(country => {
      return countryList(country);
    }).join('');
  refs.listEl.innerHTML = markUp;
}
