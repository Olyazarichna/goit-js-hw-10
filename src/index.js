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

  const inputValue = refs.inputEl.value;
  const searchQuery = inputValue.trim();

  if (searchQuery === '') {
    refs.listEl.innerHTML = '';
    refs.divEl.innerHTML = '';
    return;
  }

  fetchCountries(searchQuery)
    .then(country => {
      if (country.length === 1) {
        refs.listEl.innerHTML = '';
        fetchCountries(searchQuery).then(renderCountryCard);
        return;
      }
      if (country.length > 10) {
        console.log(country);
        refs.listEl.innerHTML = '';
        refs.divEl.innerHTML = '';
        fetchCountries(searchQuery).then(
          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.'),
        );
        return;
      }

      if (country.length >= 2 || country.length <= 10) {
        console.log(country);
        refs.divEl.innerHTML = '';
        fetchCountries(searchQuery).then(renderLisrCard);
        return;
      }
    })
    .catch(error => {
      return Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function renderCountryCard(name) {
  const markUp = countryCard(name);
  refs.divEl.innerHTML = markUp;
}

function renderLisrCard(name) {
  const markUp = countryList(name);
  refs.listEl.innerHTML = markUp;
}
