const { Router } = require('express');
const ProfileService = require('../services/profileService.js');
const Profile = require('../models/Profile')

module.exports = Router()
.post('/', (req, res, next) => {
    ProfileService.create(req.body)
        .then((profile) => res.send(profile))
        .catch(next);
})

.get('/', (req, res, next) => {
    Profile.selectAll()
    .then((profile) => res.send(profile))
    .catch(next);
})


.get('/:id', (req, res, next) => {
    Profile.getById(req.params.id)
    .then((profile) => res.send(profile))
    .catch(next)
})


.put('/:id', (req, res, next) => {
    Profile.update(req.params.id, req.body)
    .then((profile) => res.send(profile))
    .catch(next)
})

.delete('/:id', (req, res, next) => {
    Profile.delete(req.params.id, req.body)
    .then((profile) => res.send(profile))
    .catch(next)
})