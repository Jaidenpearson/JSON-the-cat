const needle = require('needle');

const breedSearch = (breed, url) => {
  needle.get(url + breed.toLowerCase(), (error, response, body) => {
    if (error) {
      console.log('Error:', error);
      return;
    } if (!body[0]) {
      console.log('Breed not found, please check spelling');
      return
    }
    console.log('Response:', response && response.statusCode);
    console.log(body[0].description);
  });
};

breedSearch('sy', 'https://api.thecatapi.com/v1/breeds/search?q=');
