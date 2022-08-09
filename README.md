
# REST API

API that takes an excel file as input in the POST route using npm module multer, parses it using read-excel-file module and stores the data in the MongoDb Atlas database.

## Heroku link

 https://fastjob123.herokuapp.com/api/pets




## Tech Stack

**Server:** Node, Express

**Database:** MongoDB using mongoose




## Run Locally

Clone the project

```bash
  git clone https://github.com/supriyayadav221/Node-Prac.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features

- A POST route “/api/pet” to add pets from an excel file
- A GET route “/api/pet” to get all the pets in the database
- A GET route “/api/pet/<petId>” to get a specific pet (petId will be a dynamic value eg. /api/pet/abc123)
- A PATCH route “/api/pet/<petId>” to update the details of a specific pet
- A DELETE route “/api/pet/<petId>” to delete a specific pet
