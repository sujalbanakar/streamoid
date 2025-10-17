# Streamoid - Product Catalog Backend

A **Node.js & Express** backend to manage product catalogs for online sellers.  
Sellers can upload CSV files, validate products, and query the database.  
Built with **MongoDB, Multer, EJS, bcrypt, and JWT authentication**.

---

## 🚀 Features

- 📤 Upload product CSV files and validate data.  
- 💾 Store valid products in MongoDB.  
- 📋 List all products with pagination support.  
- 🔍 Search/filter products by **brand**, **color**, **price**, and **category**.  
- 🔐 Admin panel with **JWT authentication**.  
- 👤 Owner login and product management dashboard.  
- ⚙️ Flash messages for validation & upload status.  

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| Backend Framework | **Node.js**, **Express.js** |
| Database | **MongoDB** (via **Mongoose**) |
| Template Engine | **EJS** |
| File Upload | **Multer** |
| Authentication | **JWT (JSON Web Token)** |
| Security | **bcrypt** for password hashing |
| Notifications | **connect-flash**, **express-session** |

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sujalbanakar/streamoid.git
   cd streamoid
