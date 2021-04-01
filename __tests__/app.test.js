const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
// const ProfileService = require('../lib/services/ProfileService')
const Profile = require('../lib/models/Profile')

describe('profile routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let profile;
  beforeEach(async () => {
    profile = await Profile.insert({ userName: 'test user', favoriteCharacter: '030555b3-4c92-4fce-93fb-e70c3ae3df8b', hairColor: 'Brown' });

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


  it('gets all of the users', async () => {

    const res = await request(app)
    .get(`/api/v1/profiles`);
    expect(res.body).toEqual([{
      id: expect.any(String),
      userName: expect.any(String),
      favoriteCharacter: expect.any(String),
      hairColor: expect.any(String),
    }]);
  });


  it('gets user by id', async () => {
    const res = await request(app)
    .get('/api/v1/profiles/1');
    expect(res.body).toEqual({
        id: '1',
        userName: 'test user',
        favoriteCharacter: '030555b3-4c92-4fce-93fb-e70c3ae3df8b',
        hairColor: expect.any(String),
    })
  })

  it('edits one profile with new hair color', async () => {
    const res = await request(app)
    .put('/api/v1/profiles/1')
    .send({ hairColor: 'white' });

    expect(res.body).toEqual({
      id: '1',
      userName: 'test user',
      favoriteCharacter: '030555b3-4c92-4fce-93fb-e70c3ae3df8b',
      hairColor: 'white',
    })
  })

  it('deletes one profile', async () => {
    const res =  await request(app).delete('/api/v1/profiles/1');
    
    expect(res.body).toEqual(
      {
        id: expect.any(String),
        userName: expect.any(String),
        favoriteCharacter: expect.any(String),
        hairColor: expect.any(String),
      }
    )
  })



});
