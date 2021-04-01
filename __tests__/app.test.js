const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('profile routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a profile with the characters hair color', async () => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({ userName: 'test user', favoriteCharacter: '030555b3-4c92-4fce-93fb-e70c3ae3df8b', hairColor: 'Brown' });

    expect(res.body).toEqual({
      id: expect.any(String),
    userName: 'test user',
      favoriteCharacter: '030555b3-4c92-4fce-93fb-e70c3ae3df8b',
      hairColor: expect.any(String),
    });
  });
});
