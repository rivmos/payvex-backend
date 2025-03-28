# 🚀 Backend Project Setup Guide 🛠️

## 🔥 Overview

This is the **backend** for our Node.js application using **Express, Prisma, and PostgreSQL**. The project is built with **Node.js 20+** and uses **pnpm** for package management. 🏗️

[Buisness Logic Design](https://excalidraw.com/#room=377748d0ebbf57fb9680,-JUJADlLl0YY94BzhrZi8g)
[Database Tables Flow](https://drawsql.app/teams/payvex/diagrams/payvex)
[Project Requirement Document](https://foggy-bagpipe-c41.notion.site/Payvex-1bd3bdd82007801280d6ec5fcaeb6afc?pvs=73)

## 🛠️ Technologies Used

- 🟢 **Node.js** (Version 20+)
- 📦 **pnpm** (Performant Node Package Manager - Version 10.6.5)
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
pnpm install
```

### 4️⃣ Run Database Migrations 🛢️

```sh
pnpm run db:migrate
```

### 5️⃣ Start the Development Server 🚀

```sh
pnpm run dev
```

---

## 🌍 Deployment Instructions

Follow these **four steps** when deploying to a production server:

```sh
pnpm run db:generate              # Generate Prisma client
pnpm --package=typescript dlx tsc
pnpx prisma migrate deploy        # Apply database migrations
pnpm run db:seed                  # Seed initial data
pnpm start                        # Start server
```

This ensures your **dependencies, database, compiled code, and server** are all set up correctly. 🚀🔥
