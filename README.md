# FinTrack API 
Version 0.1.0 

Backend service for **FinTrack**, a personal finance management application.
This API provides secure authentication and transaction management features built with a scalable and modular architecture.

---

##  Project Status

Version 0.1.0 — Initial Release

This is the first functional version of the API.
Core authentication and transaction features are implemented.
Additional features and improvements are planned for future releases.

---

##  Tech Stack

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- ESLint

---

##  Architecture Overview

The project follows a clean and modular architecture pattern:

```bash
src/ 
│ 
├── auth/ # Authentication (JWT strategy, login, register) 
├── transactions/ # Transactions module (CRUD operations) 
├── common/ │ 
└── types/ # Shared types and interfaces 
│ 
├── prisma/ # Prisma schema and database configuration 
└── main.ts # Application entry point

---
```

1.Request Flow
2.Controller → Handles HTTP requests
3.Service → Contains business logic
4.Prisma → Database access layer
5. JWT Strategy → Authentication validation

##  Authentication

Authentication is handled using JSON Web Tokens (JWT).

Authentication Flow: 

1.User registers an account
2.User logs in
3.API returns a JWT token
4.Token must be sent in request headers:
Authorization: Bearer <your_token>

All transaction routes are protected and require a valid JWT.

---

##  API Endpoints (v0.1.0)

Authentication
Method	Endpoint	Description
POST	/auth/register	Registers a new user account.
POST	/auth/login	Authenticates a user and returns a JWT token.

Transactions

All routes below require JWT authentication via header:
Authorization: Bearer <token>

Method	Endpoint	Description
GET	/transactions	Returns all transactions for the authenticated user.
POST	/transactions	Creates a new transaction linked to the authenticated user.
DELETE	/transactions/:id	Deletes a specific transaction by its ID.
---
