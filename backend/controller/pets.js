const readXlsxFile = require("read-excel-file/node");
const Pet = require("../models/petModel");
const mongoose = require("mongoose");
//GET /api/pets
const getPets = async (req, res) => {
  const pets = await Pet.find();
  res.status(200).json(pets);
};

//POST /api/pets
const addPets = async (req, res) => {
  let filepath = process.cwd();

  let p = filepath + "/upload/" + req.file.filename;

  const data = await readXlsxFile(p);
  console.log(data.length);
  if (data.length <= 0) {
    res.status(400).json({ message: "DataSet empty" });
  } else {
    data.shift();
    let createPetDetails;
    data.forEach(async (item) => {
      createPetDetails = await Pet.create({
        name: item[0],
        type: item[1],
        breed: item[2],
        age: item[3],
      });
    });
    res.status(200).json({ message: "Dataset added into database!" });
  }
};

//PATCH /api/pets/:id
const updatePetWithId = async (req, res) => {
  let validId = checkIdValid(req.params.id)
  if(!validId) 
  {
    res.status(404).json({ message: `invalid id` })
    return;
  }
  const pet = await Pet.findById(req.params.id);
  if (!pet) {
    console.log("Not found");
    res.status(404).json({ message: "Pet not found!" });
  } else {
  }
  const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true,});
  res.status(200).json(updatedPet);
};

//DELETE /api/pets/:id
const deletePetWithId = async (req, res) => {
  let validId = checkIdValid(req.params.id)
  if(!validId) 
  {
    res.status(404).json({ message: `invalid id` })
    return;
  }
  const pet = await Pet.findOne(req.params.id);
  if (!pet) {
    console.log("Not found");
    res.status(400).json({ message: "Pet not found!" });
    throw new Error();
  }
  await Pet.findByIdAndRemove(req.params.id);
  res.status(200).json({ message: `Delete with ${req.params.id}` });
};

const getPetById = async(req, res) =>
{
  
  let validId = checkIdValid(req.params.id)
  if(!validId) 
  {
    res.status(404).json({ message: `invalid id` })
    return;
  }
  const petById = await Pet.findById(req.params.id);
  if(!petById)
  {
    
    res.status(404).json({message:'Not found'})
  }
  else
  {
    res.status(200).json(petById)
  }

}

function checkIdValid(id)
{
  return mongoose.Types.ObjectId.isValid(id);
}


module.exports = {
  getPets,
  addPets,
  updatePetWithId,
  deletePetWithId,
  getPetById
};
