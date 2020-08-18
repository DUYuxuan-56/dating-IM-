# Whatsapp Clone Server

[//]: # (head-end)


A full working server for an IM app written in latest versions of:
* [NodeJS](https://github.com/nodejs/node)
* [Express](https://github.com/expressjs/express)
* [PostgreSQL](https://github.com/postgres/postgres)
* [GraphQL](https://github.com/graphql/graphql-js)
* [Typescript](https://github.com/microsoft/TypeScript)
* [Apollo-Server](https://github.com/apollographql/apollo-server)
* [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator)
* [GraphQL Modules](https://github.com/urigo/graphql-modules)
* [Jest](https://github.com/facebook/jest)

## Running locally

Clone the project.


Install dependencies:
```
$ yarn
```

Run the the codegen to generate Typescript types from GraphQL:
```
$ yarn codegen
```

Install PostgreSQL and initialize a database

* With docker - PosgreSQL
```
docker-compose up -d

Run tests to make sure everything is ok:
```
$ yarn test
```

Start the server:
```
$ yarn start
```
