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
    return new Profile(rows[0])
  }
  
  
  
static async selectAll() {
  const { rows } = await pool.query(`SELECT * FROM profiles`);
  const users = rows.map(row => new Profile(row));

  return users;
}


static async getById(id) {
  const { rows } = await pool.query('SELECT * FROM profiles WHERE id=$1', [id]);

  return new Profile(rows[0])
}



static async update(id, { hairColor }) {
  const { rows } = await pool.query(
    `UPDATE profiles
    SET hair_color = $1
    WHERE id = $2
    RETURNING *`,
    [hairColor, id]
  );
  return new Profile(rows[0]);
}
  


static async delete(id) {
  const { rows } = await pool.query(
  `
  DELETE FROM profiles WHERE id=$1 RETURNING *`, [id]
  );
  return new Profile(rows[0])
}


};



