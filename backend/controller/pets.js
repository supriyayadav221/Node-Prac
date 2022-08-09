//GET /api/pets
const getPets = (req, res)=>{
    res.status(200).json({message:'Get'})
}

//POST /api/pets
const addPets = (req, res)=>{
    console.log(req.body)
    res.status(200).json({message:'Set'})
}

//PATCH /api/pets/:id
const updatePetWithId = (req, res)=>{
    res.status(200).json({message:`Update with ${req.params.id}`})
}

//DELETE /api/pets/:id
const deletePetWithId = (req, res)=>{
    res.status(200).json({message:`Delete with ${req.params.id}`})
}

module.exports ={
    getPets,
    addPets,
    updatePetWithId,
    deletePetWithId
}