{
    "name": "food-hero",
    "version": "1.0.0",
    "description": "",
    "main": "server/server.js",
    "scripts": {
      "start": "node server/server.js --ignore client",
      "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
      "install": "cd server && npm i && cd ../client && npm i",
      "seed": "cd server && npm run seed",
      "build": "cd client && npm run build"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "concurrently": "^5.3.0"
    }
  }

  