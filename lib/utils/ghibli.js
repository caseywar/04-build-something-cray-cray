const { default: axios } = require('axios');

const getCharacterInfo = async (characterName) => {
  const { data } = await axios.get(
    `https://ghibliapi.herokuapp.com/people/${characterName}`
  );

  return data.hair_color;
};

module.exports = { getCharacterInfo };