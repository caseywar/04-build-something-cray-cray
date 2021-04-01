const { Router } = require('express');
const ProfileService = require('../services/profileService.js');

module.exports = Router()
.post('/', (req, res, next) => {
    ProfileService.create(req.body)
        .then((profile) => res.send(profile))
        .catch(next);
})