const Profile = require('../models/Profile.js');
const { getCharacterInfo } = require('../utils/ghibli.js')

module.exports = class ProfileService {
    static async create({ userName, favoriteCharacter }) {

        const hairColor = await getCharacterInfo(favoriteCharacter);
        // await console.log(hairColor)
        const profile = await Profile.insert({
            userName,
            favoriteCharacter,
            hairColor
        });
        
        return profile;

    }
}