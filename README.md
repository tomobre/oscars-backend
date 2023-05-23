# dashboard-api

## Requirements

### DB

### App Packages

First you need to install/update the packages.

Before running this command, make sure to copy the env.example file and have the license key env variable for the geolocation.

After that you can install the packages. To do so, run:

```bash
npm install
```

### App Settings

Now you need to duplicate the file called `.env.example` and name it `.env`. This file contains all the variables and settings required to run your app. Now you need to go over the variables there and change them to the ones that represent your local environment.

### Start the App

To start the app just run:

```bash
npm run start:dev
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

## Constants

In the src/constants folder you can find all the constants to change the data, to get only the data from a certain date, to roundup certain numbers in a different way, to slice the amount of given data, or to change the frequency in which the data is stored.

## TODO

- if an ip goes from having one service node to cero, it should be removed from the database, otherwise in the code the api call simply wont compare it ever again and the ip will remain in the database with 1 service node forever.
- Same thing applies with operator address
