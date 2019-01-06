# FermentStation
FermentStation is a single-page tracking application for people who home-brew fermented beverages called kombucha and kefir. The app allows users to track ingredients used for each batch and its status in the multi-step fermentation process. FermentStation is designed to mimic the look and feel of a native application in order to allow users to easily use the app while preparing their beverages in the kitchen.

## Getting Started
To run FermentStation locally, create an empty directory and clone the project by running the following command in your terminal ```git@github.com:jessicabarnett8219/FermentStation.git```

FermentStation uses a database.json file to store all data. To create the database, run:
```
mkdir api
cd api
touch fermentstation.json
```

Open fermentstation.json and copy the following sample data into the file to create a database skeleton and supply the neccessary data to populate the form options in the app. 

<details><summary>Sample Data</summary>
<p>

```
  {
  "users": [
    {
      "id": 1,
      "firstName": "TestUser",
      "lastName": "TestUser",
      "email": "test@test.com",
      "password": "test"
    }
  ],
  "batches": [
    {
      "name": "Test Batch",
      "userId": 1,
      "typeId": 2,
      "rating": "",
      "review": "",
      "startDate": "2018-12-30",
      "bottleDate": "",
      "completeDate": "",
      "status": 1,
      "id": 1
    }
  ],
  "types": [
    {
      "id": 1,
      "name": "Kombucha"
    },
    {
      "id": 2,
      "name": "Water Kefir"
    }
  ],
  "statuses": [
    {
      "id": 1,
      "name": "brewing"
    },
    {
      "id": 2,
      "name": "bottled"
    },
    {
      "id": 3,
      "name": "completed"
    }
  ],
  "ingredient-categories": [
    {
      "id": 1,
      "name": "sugar"
    },
    {
      "id": 2,
      "name": "supplements"
    },
    {
      "id": 3,
      "name": "tea"
    },
    {
      "id": 4,
      "name": "kefir starter"
    },
    {
      "id": 5,
      "name": "flavoring"
    },
    {
      "id": 6,
      "name": "kombucha starter"
    },
    {
      "id": 7,
      "name": "water"
    }
  ],
  "ingredients": [
    {
      "id": 1,
      "name": "white sugar",
      "categoryId": 1
    },
    {
      "id": 2,
      "name": "baking soda",
      "categoryId": 2
    },
    {
      "id": 3,
      "name": "black tea",
      "categoryId": 3
    },
    {
      "id": 5,
      "name": "kefir grains",
      "categoryId": 4
    },
    {
      "id": 6,
      "name": "grape juice",
      "categoryId": 5
    },
    {
      "id": 7,
      "name": "vinegar",
      "categoryId": 6
    },
    {
      "id": 8,
      "name": "spring water",
      "categoryId": 7
    },
    {
      "id": 9,
      "name": "coconut sugar",
      "categoryId": 1
    },
    {
      "id": 10,
      "name": "molassess",
      "categoryId": 1
    },
    {
      "id": 11,
      "name": "unrefined cane sugar",
      "categoryId": 1
    },
    {
      "id": 12,
      "name": "green tea",
      "categoryId": 3
    },
    {
      "id": 13,
      "name": "oolong tea",
      "categoryId": 3
    },
    {
      "id": 14,
      "name": "filtered water",
      "categoryId": 7
    },
    {
      "id": 15,
      "name": "lemon wedge",
      "categoryId": 2
    },
    {
      "id": 16,
      "name": "dried fruit piece",
      "categoryId": 2
    },
    {
      "id": 17,
      "name": "sea salt",
      "categoryId": 2
    },
    {
      "id": 18,
      "name": "starter tea",
      "categoryId": 6
    },
    {
      "id": 19,
      "name": "orange juice",
      "categoryId": 5
    },
    {
      "id": 20,
      "name": "mango juice",
      "categoryId": 5
    },
    {
      "id": 21,
      "name": "palm sugar",
      "categoryId": 1
    },
    {
      "id": 22,
      "name": "brown sugar",
      "categoryId": 1
    },
    {
      "id": 23,
      "name": "cherry juice",
      "categoryId": 5
    },
    {
      "id": 24,
      "name": "lime juice",
      "categoryId": 5
    },
    {
      "id": 25,
      "name": "lemon juice",
      "categoryId": 5
    },
    {
      "id": 26,
      "name": "fresh fruit",
      "categoryId": 5
    },
    {
      "id": 27,
      "name": "cinnamon",
      "categoryId": 5
    },
    {
      "id": 28,
      "name": "ginger",
      "categoryId": 5
    },
    {
      "id": 29,
      "name": "vanilla",
      "categoryId": 5
    }
  ],
  "batches-ingredients": [
    {
      "ingredientId": 8,
      "batchId": 1,
      "amount": 4,
      "measurement": "cups",
      "id": 1
    }
  ]
  }
```

</p>
</details>

Navigate back to the root directory and run: ``` npm install ``` This will install all libraries and their dependencies used by FermentStation. 

To run the app in development mode run ``` npm start ``` and open [http://localhost:3000]( http://localhost:3000) to view it in the browser. To start the server open another window of your terminal, navigate to api and run: ``` json-server -p 5002 -w fermentstation.json ```

## Using the APP

To get started as a user, create a new account. When you reach the dashboard create your first batch by selecting “Start a New Batch” and filling out the forms. From there you will be able to change the status of the batch by selecting “bottle batch” or “review batch” on each batch’s detail screen. A batch can be edited or deleted at any time by using the toolbar at the bottom of the detail screen. To view a list of all batches in progress or completed, use the options on the home dashboard or select “back to list” from the batch detail screen. Enjoy!

## Credits

This project was built with React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
It was styled using [turretcss framework](https://github.com/turretcss/turretcss)
It also utilized [Moment.js](https://github.com/turretcss/turretcss) and [React Moment](https://github.com/headzoo/react-moment) for date display and manipulation





