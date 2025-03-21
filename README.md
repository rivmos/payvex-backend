# 🚀 Backend Project Setup Guide 🛠️

## 🔥 Overview

This is the **backend** for our Node.js application using **Express, Prisma, and PostgreSQL**. The project is built with **Node.js 20+** and uses **npm** for package management. 🏗️

## 🛠️ Technologies Used

- 🟢 **Node.js** (Version 20+)
- 📦 **npm** (Node Package Manager)
- ⚡ **Express** (For handling HTTP requests)
- 🗄️ **Prisma** (ORM for database interactions)
- 🐘 **PostgreSQL** (Database)

## 📌 Setup Instructions

### 1️⃣ Clone the Repository 🌀

```sh
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Create an `.env` File 📝

Add a `.env` file at the root of the project with the following secrets:

```env
PORT=<your-port>
DATABASE_URL=<your-database-url>
```

### 3️⃣ Install Dependencies 📦

```sh
npm install
```

### 4️⃣ Run Database Migrations 🛢️

```sh
npm run db:migrate
```

### 5️⃣ Start the Development Server 🚀

```sh
npm run dev
```

---

## 🌍 Deployment Instructions

Follow these **four steps** when deploying to a production server:

```sh
npm install --production   # 1️⃣ Install only necessary dependencies
npx prisma migrate deploy  # 2️⃣ Apply database migrations
npm run build              # 3️⃣ Compile TypeScript to JavaScript
npm start                  # 4️⃣ Start the backend server
```

This ensures your **dependencies, database, compiled code, and server** are all set up correctly. 🚀🔥
