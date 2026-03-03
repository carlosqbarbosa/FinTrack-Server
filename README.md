# 🚀 FinTrack API (v0.1.0)

[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/carlosqbarbosa/FinTrack-Server)
[![NestJS](https://img.shields.io/badge/NestJS-Active-red)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Backend API for **FinTrack**, a personal finance management system.  
Provides secure authentication and transaction management features using a modular, scalable architecture.

---

##  Project Overview

This repository contains the backend of the FinTrack application — a modern REST API built with **NestJS**, **TypeScript**, and **Prisma**.  
It follows best practices for authentication, database modelling, and API design.

---

##  Features

 JWT Authentication (Login / Register)  
 Transactions CRUD  
 Structured architecture (Modules & DTOs)  
 Type-safe database access via Prisma  
 Validation with class-validator  
 ESLint configured for quality

---

## 🛠️ Tech Stack

| Technology | Role |
|------------|------|
| **NestJS** | Framework |
| **TypeScript** | Language |
| **Prisma ORM** | Database ORM |
| **PostgreSQL** | Database |
| **JWT** | Token Auth |
| **ESLint** | Linting |

---

## 📁 Project Structure

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

1. Request Flow
2. Controller → Handles HTTP requests
3. Service → Contains business logic
4. Prisma → Database access layer
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

### Authentication

| Method | Endpoint | Description |
| :---: | :--- | :--- |
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Authenticate and return JWT |

### Transactions (Protected)

> All routes below require Authorization header.

| Method | Endpoint | Description |
| :---: | :--- | :--- |
| `GET` | `/transactions` | List all transactions for user |
| `POST` | `/transactions` | Create a new transaction |
| `DELETE` | `/transactions/:id` | Delete a transaction by ID |

---
