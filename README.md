# AngularBasic FinalLab UserManager

A simple Angular application for managing users. This project demonstrates basic CRUD operations using mock data and integrates with a public API for real user data. It is designed as a learning exercise for Angular fundamentals.

## Tech Stack

- Angular
- RxJS
- TypeScript
- Angular HttpClient

## Features

- List users (mock and real API)
- View user details
- Add new users
- Delete users
- Switch between mock data and real API data

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- Angular CLI (recommended): `npm install -g @angular/cli`

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/AngularBasic-FinalLab-UserManager.git
   cd AngularBasic-FinalLab-UserManager
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` and update values as needed.
   - If `.env.example` is not present, you can skip this step.

### Usage

- **Development mode**

  ```sh
  npm run start
  ```

  or

  ```sh
  ng serve
  ```

- **Production build**
  ```sh
  npm run build
  ```

## API Endpoints

| Method | Route            | Description                      |
| ------ | ---------------- | -------------------------------- |
| GET    | `/api/users`     | Fetches all users (mock or real) |
| GET    | `/api/users/:id` | Fetches user by ID               |
| POST   | `/api/users`     | Adds a new user                  |
| DELETE | `/api/users/:id` | Deletes a user by ID             |

> Note: API routes are handled in-memory for mock data. Real data is fetched from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/users).
