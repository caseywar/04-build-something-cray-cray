const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  userName;
  favoriteCharacter;
  hairColor;

  constructor(row) {
    this.id = row.id;
    this.userName = row.user_name;
    this.favoriteCharacter = row.favorite_character;
    this.hairColor = row.hair_color;
  }

static async insert({ userName, favoriteCharacter, hairColor }) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO profiles (user_name, favorite_character, hair_color) VALUES ($1, $2, $3) RETURNING *',
      [userName, favoriteCharacter, hairColor]
    );
    return new Profile(rows[0])}
  
  
  
static async selectAll() {
  const { rows } = await pool.query(`SELECT * FROM profiles`);
  const users = rows.map(row => new Profile(row));

  return users;
}
  
  };
