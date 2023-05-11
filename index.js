const express = require("express");
const cors = require("cors");

const apps = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

apps.use(cors(corsOptions));

// parse requests of content-type - application/json
apps.use(express.json());

apps.use(express.urlencoded({ extended: true }));

// simple route
apps.get("/", (req, res) => {
  res.json({ message: [
    {
      "_id": "5e363b135036a835ac1a7da8",
      "title": "Js Tut#",
      'name':'ravi',
      'Gmail':'ravidholariya700@gmail.com',
      "description": "Description for Tut#",
      "published": true,
      "createdAt": "2020-02-02T02:59:31.198Z",
      "updatedAt": "2020-02-02T02:59:31.198Z",
      "__v": 0
    },
     {
      "_id": "6e363b135036a835ac1a7da8",
      "title": "Js Tut#",
      'name':'rajan',
      'Gmail':'rajankathiriya200@gmail.com',
      "description": "Description for Tut#",
      "published": true,
      "createdAt": "2020-02-02T02:59:31.198Z",
      "updatedAt": "2020-02-02T02:59:31.198Z",
      "__v": 0
    },
    {
      "_id": "6e363b135036a835ac1a7da8",
      "title": "Js Tut#",
      'name':'trushal',
      'Gmail':'trushaldholariya60@gmail.com',
      "description": "Description for Tut#",
      "published": true,
      "createdAt": "2020-02-02T02:59:31.198Z",
      "updatedAt": "2020-02-02T02:59:31.198Z",
      "__v": 0
    },
    {
      "_id": "6e363b135036a835ac1a7da8",
      "title": "Js Tut#",
      'name':'milan',
      'Gmail':'milankotadiya243@gmail.com',
      "description": "Description for Tut#",
      "published": true,
      "createdAt": "2020-02-02T02:59:31.198Z",
      "updatedAt": "2020-02-02T02:59:31.198Z",
      "__v": 0
    },
    {
      "_id": "6e363b135036a835ac1a7da8",
      "title": "Js Tut#",
      'name':'kamo',
      'Gmail':'kamokorat453@gmail.com',
      "description": "Description for Tut#",
      "published": true,
      "createdAt": "2020-02-02T02:59:31.198Z",
      "updatedAt": "2020-02-02T02:59:31.198Z",
      "__v": 0
    },
    {
      "_id": "6e363b135036a835ac1a7da8",
      "title": "Js Tut#",
      'name':'drushil',
      'Gmail':'drushilrudani777@gmail.com',
      "description": "Description for Tut#",
      "published": true,
      "createdAt": "2020-02-02T02:59:31.198Z",
      "updatedAt": "2020-02-02T02:59:31.198Z",
      "__v": 0
    },

  ]
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 7000;
apps.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});