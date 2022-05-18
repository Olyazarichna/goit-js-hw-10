export function fetchCountries(name) {
  const URL = 'https://restcountries.com/v3.1/name/';
  const fields = 'fields=name,capital,population,flags,languages';
  return fetch(`${URL}${name}?${fields}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
