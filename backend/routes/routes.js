const express = require('express');
const { getPets, deletePetWithId, updatePetWithId, addPets ,getPetById} = require('../controller/pets');
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: 'upload/'});
const path = require("path");


router.get('/',getPets)

router.get('/:id',getPetById)

router.post('/',upload.single('file'),addPets)

router.patch('/:id',updatePetWithId)

router.delete('/:id',deletePetWithId)

module.exports = router;




