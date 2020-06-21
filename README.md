# service-dictionary-api

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=alert_status)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=bugs)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=code_smells)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=coverage)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=ncloc)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=alert_status)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=security_rating)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=sqale_index)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=service-dictionary_service-dictionary-api&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=service-dictionary_service-dictionary-api)

The REST api for the service-dictionary.

## Requirements

- [Node 12 (LTS)]('https://nodejs.org/en/blog/release/v12.13.0/')

Databases:

Sequelize supports PostgreSQL, MySQL, MariaDB, SQLite and MSSQL but we use:

- [Postgres]('https://github.com/service-dictionary/service-dictionary-postgres-compose')

# Endpoints

See OpenAPI defintions.

# Hosting

- [API hosting]('TBC')

## Environment

Environment variables are stored in the .env file. Defaults as per below:

```
DB_CONNECTION_STRING=postgres://postgres:changeme@localhost:5432/postgres
```

## Build

```bash
npm install
```

## Test

```bash
npm test
```

## Run

```bash
npm start
```

## Useful.

Get a EADDRINUSE error when restarting the server.

```bash
lsof -i :5000
```

then kill the process holding onto the port:

```bash
kill -9 :<port>
```

```

```
