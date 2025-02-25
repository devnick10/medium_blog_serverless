# Hono Blog Monorepo

This is a full-stack monorepo for a blogging platform built using **Hono** (Cloudflare Workers) for the backend, **React** for the frontend, and **Zod** for shared validation schemas.

## 📂 Project Structure

```
├── backend/                 # Backend API using Hono & Cloudflare Workers
│   ├── src/
│   │   ├── middlewares/auth.ts   # JWT authentication middleware
│   │   ├── routes/
│   │   │   ├── user.ts           # User authentication routes
│   │   │   ├── blog.ts           # Blog-related routes
│   │   ├── index.ts              # Main entry point for Hono app
│   ├── prisma/                   # Prisma configurations & migrations
│   ├── migrations/                # Database migration files
│   ├── schema.prisma             # Prisma schema file
│   ├── wrangler.jsonc            # Cloudflare Workers config
│   ├── package.json              # Backend dependencies
│   ├── tsconfig.json             # TypeScript configuration
│
├── common/                  # Shared validation schemas using Zod
│   ├── src/
│   │   ├── schemas/
│   │   │   ├── userSchema.ts      # Validation for user-related requests
│   │   │   ├── blogSchema.ts      # Validation for blog-related requests
│   ├── package.json              # Common package (published to npm)
│   ├── tsconfig.json             # TypeScript configuration
│
├── frontend/                # Frontend using React (Next.js/Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── config/
│   │   ├── hooks/
│   │   ├── utils/
│   ├── package.json              # Frontend dependencies
│   ├── tsconfig.json             # TypeScript configuration
│
├── .gitignore                # Ignoring unnecessary files
├── package.json              # Monorepo root dependencies
├── tsconfig.json             # TypeScript configuration for the monorepo
└── README.md                 # Project documentation
```

## 🚀 Tech Stack

- **Backend**: Hono, Cloudflare Workers, Prisma, PostgreSQL
- **Frontend**: React (Next.js/Vite)
- **Database**: Avian PostgreSQL (via Prisma Accelerate)
- **Validation**: Zod (shared across frontend & backend)
- **Auth**: JWT-based authentication
- **Deployment**: Cloudflare Workers, Vercel/Netlify (for frontend)

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/hono-blog-monorepo.git
cd hono-blog-monorepo
```

### 2️⃣ Install Dependencies
```sh
yarn install  # Use Yarn for package management
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the **backend** directory:
```env
DATABASE_URL="your_database_url"
JWT_SECRET="your_secret_key"
```

### 4️⃣ Run the Backend (Hono + Cloudflare Workers)
```sh
cd backend
yarn dev  # Starts local Cloudflare Worker
```

### 5️⃣ Run the Frontend (React)
```sh
cd frontend
yarn dev  # Starts the frontend
```

## 📜 API Endpoints

### Authentication
- `POST /api/v1/user/signup` → Create a new user
- `POST /api/v1/user/signin` → Authenticate user & get JWT
- `GET /api/v1/user/logout` → Logout user

### Blog Routes (Authenticated)
- `POST /api/v1/blog/` → Create a new blog post
- `GET /api/v1/blog/` → Fetch all blog posts
- `GET /api/v1/blog/:id` → Fetch a specific blog post
- `PUT /api/v1/blog/:id` → Update a blog post
- `DELETE /api/v1/blog/:id` → Delete a blog post

## 🏗 Contributing

1. Fork the repository
2. Create a new branch (`feature/my-feature`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request 🚀

## 📜 License
This project is licensed under the MIT License.

---

Feel free to modify this README based on your exact implementation! 🚀

