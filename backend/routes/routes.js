const express = require('express');
const { getPets, deletePetWithId, updatePetWithId, addPets } = require('../controller/pets');
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: 'upload/'});
router.get('/',getPets)

router.post('/',upload.single('file'),addPets)

router.patch('/:id',updatePetWithId)

router.delete('/:id',deletePetWithId)

module.exports = router;




