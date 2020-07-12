# Rokket Books APP

This application serves as an interface to manage a list of books. This books can be created, modified and deleted.

### Requirements

- node
- yarn
- docker
- docker-compose

### Setup

To run in a development environment:

1. `yarn install`
2. `yarn start`

To run in a production-like environment:

1. `yarn compose` (For this script to work, the Rokket API project has to be in `../rokket-api` relative to `docker-compose.yml`)

For faster development, it's posible to run just the backend service using the `yarn compose:dev` script along with `yarn start`. Before running the frontend, it's necessary to modify the API's base URL in `src/api/http.provider.ts`. Should end up like `baseURL: "http://localhost:8080"`.
