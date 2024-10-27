const fetchBreedDescription = (breedName, callback) => {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

  const needle = require('needle');
  
  needle.get(url, (error, response) => {
    if(error) {
      callback(error)
      return
    }
    const catData = response.body

    if(catData.length == 0) {
      callback("Cat breed not found, please check spelling", null)
    } else {
      const description = catData[0].description
      callback(null, description)
    }
  });
};

module.exports = fetchBreedDescription;
