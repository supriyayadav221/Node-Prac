const express = require('express');
const { getPets, deletePetWithId, updatePetWithId, addPets } = require('../controller/pets');
const router = express.Router();

router.get('/',getPets)

router.post('/',addPets)

router.patch('/:id',updatePetWithId)

router.delete('/:id',deletePetWithId)

module.exports = router;




