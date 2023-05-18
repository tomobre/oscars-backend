# dashboard-api

## Requirements

### DB

### Firebase Account

### Etc

## Let's get our hands dirty

### App Packages

First you need to install/update the packages. To do so, run:

```bash
npm install
```

### App Settings

Now you need to duplicate the file called `.env.example` and name it `.env`. This file contains all the variables and settings required to run your app. Now you need to go over the variables there and change them to the ones that represent your local environment.

### Start the App

To start the app just run:

```bash
npm run dev
```

## Addming Models

### Add model to models fodler

Follow TypeOrm decoartos

### Create migration

Run the following command, where `<<Model>>` is the name of the models you have changed or created.

```bash
    npm run typeorm migration:generate -- -n <<Model>>
```

### Run Migrations

To run migrations excecute

```bash
    npm run migrations
```

## Troubelshooting

### Backend: Error (auth/configuration-not-found)

This means you haven't enable authentication in your firebase account.

## Notes

When we want to start adding functioanlity lets visit
https://github.com/hagopj13/node-express-boilerplate
first

## TODO

- if an ip goes from having one service node to cero, it should be removed from the database, otherwise in the code the api call simply wont compare it ever again and the ip will remain in the database with 1 service node forever.
- Same thing applies with operator address
