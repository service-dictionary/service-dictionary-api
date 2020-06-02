# DataDictionary API

# Hosting

- [FE hosting]('TBC')
- [API hosting]('TBC')

## Add an .env file

## Build

```
npm install
```

## Test

```
npm test
```

## Run

```
npm start
```

# Endpoints

| **Verb** | **Endpoint**     | **Description**                   |
| -------- | ---------------- | --------------------------------- |
| GET      | /api/sources/:id | Find a single source using the id |
| GET      | /api/sources     | Get all sources                   |

# Docker

Will build the postgres and pgadmin4 environment.

```
docker-compose up -d
```

## Dependancies

Postgres
