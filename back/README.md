# Client Management API

A simple REST API built with **NestJS** for managing client data.

## Features

- **Create a client**: Add a new client with name, CPF, email, favorite color, and an optional note.

## Technologies

- **NestJS**
- **Prisma** (for database interaction)
- **class-validator** (for input validation)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/viniciusleitef/back-Desafio-Tecnico.git
cd client-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment

**Create a .env file with the following content:**

```bash
DATABASE_URL="postgresql://user:password@db:5432/mydatabase"
```

### 4. Run migrations

**Run the following commands to create the initial migrations and generate the Prisma client:**

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the server

**Create a .env file with the following content:**

```bash
npm run start
```

## Endpoints

- **POST /client**

```bash
  Request Body:
{
  "name": "Jane Doe",
  "cpf": "98765432100",
  "email": "jane.doe@example.com",
  "favoriteColor": "green",
  "note": "Hello, I am Jane Doe."
}
  Response:
{
  "id": 1,
  "name": "Jane Doe",
  "cpf": "98765432100",
  "email": "jane.doe@example.com",
  "color": "green",
  "note": "Hello, I am Jane Doe.",
  "createdAt": "2025-01-18T12:34:56.789Z"
}

```

- **Get /client**

```bash
Response:
[
    {
        "id": 2,
        "name": "Vinícius Leite Ferreira Alves",
        "cpf": "105.864.223-12",
        "email": "teste@gmail.com",
        "color": "Vermelho",
        "note": "notes about something",
        "createdAt": "2025-01-19T22:02:41.320Z"
    },
    {
        "id": 3,
        "name": "Ryan Duarte",
        "cpf": "105.861.223-12",
        "email": "teste2@gmail.com",
        "color": "Vermelho",
        "note": "",
        "createdAt": "2025-01-19T22:02:47.101Z"
    }
]

```
