# node-api-boilerplate
A Node API boilerplate including CRUD operations based on MongoDB schema. Used mLab for MongoDB deployment. 

To start hacking,

```js
npm run dev
```

OR 

```js
node server.js \\only if nodemon is not installed
```

This will allocate 8000 port to node backend. Using express framework, parse xxx-encoded-formdata via body-parser.

## mLab 
- Create account with sandbox account
- Then create collection
- Select users tab and create new database in collections
- Copy that name of the database and paste it into `server.js` file.
- Also in config folder -> `db.js` should have URL given by mLab to point towards that database. To view that see home screen of your deployments section
