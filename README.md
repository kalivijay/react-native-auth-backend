# React Native Auth Backend

A simple authentication backend server built with Express.js for React Native applications.

## Features

- JWT-based authentication
- Login endpoint
- Dashboard data endpoint
- CORS enabled

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

The server will run at http://localhost:3000

## API Endpoints

### POST /login
Authenticates a user and returns a JWT token.

Request body:
```json
{
  "username": "vijay",
  "password": "123456"
}
```

### GET /dashboard
Returns dashboard data including stats and games.

## Dependencies

- express
- cors
- jsonwebtoken 