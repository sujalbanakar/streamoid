# 🧵 Streamoid – Product Catalog Backend

> **An intelligent, fast, and scalable backend system to manage product catalogs for online sellers.**  
> Upload, validate, and manage product data effortlessly — powered by **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Overview

Streamoid is a backend application designed for e-commerce platforms and seller dashboards.  
It simplifies the product onboarding process — sellers can upload **CSV files**, automatically validate data, and manage their product catalogs using a clean and secure API.  

Built with modern technologies and developer-friendly practices, Streamoid focuses on **automation, scalability, and clean architecture**.

---

## ✨ Features

- ✅ Upload and parse **CSV files** for product import  
- ✅ Automatically validate product fields and filter invalid entries  
- ✅ Store valid products in **MongoDB**  
- ✅ View all products with pagination and sorting support  
- ✅ Search and filter by brand, color, or price range  
- ✅ JWT-based secure **authentication system**  
- ✅ Simple **admin dashboard (EJS)** for uploads and monitoring  
- ✅ Modular codebase with clear separation of routes, models, and configuration  

---

## 🧠 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Backend Framework** | Node.js, Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Templating Engine** | EJS |
| **File Handling** | Multer (for CSV uploads) |
| **Authentication** | JWT (JSON Web Token) |
| **Security & Hashing** | bcrypt.js |
| **Session & Flash Messages** | connect-flash, express-session |

---

## 📂 Folder Structure

```

streamoid/
│
├── config/
│   ├── mongoose-connections.js          # mongoose connection setup
│   └── multer-config.js                 # Multer storage configuration
│
├── controller/
│   ├── productController.js         
│                 
├── models/
│   └── productmodel.js                  # Product schema and validations
│
├── routes/
│   ├── productRouter.js                 # Product listing and query routes
│   └── uploadRouter.js                  # File upload handling routes
│
├── views/
│   ├── upload.ejs                       # Upload interface
│   └── index.ejs                        # main page
│
├── app.js                               # Main server entry point
├── package.json
└── README.md

````

---

## 🧾 Sample CSV Format

You can upload product data using a CSV file formatted like this:

```csv
sku,name,brand,color,size,mrp,price,quantity
TSHIRT-RED-001,Classic Cotton T-Shirt,StreamThreads,Red,M,799,499,20
JEANS-BLU-032,Slim Fit Jeans,DenimWorks,Blue,32,1999,1599,15
BAG-TOTE-BEI,Canvas Tote Bag,CarryCo,Beige,OneSize,899,699,35
````

💡 **Note:** The backend automatically validates missing or incorrect fields before insertion.

---

## 💼 Use Cases

* 🛍️ E-commerce seller onboarding platform
* 🧾 Product catalog management system
* ⚙️ Internal product validation tool for teams
* 📦 Automated inventory data import system

---

## 🧑‍🤝‍🧑 Contributing

Contributions are welcome!
If you'd like to fix a bug or add a feature:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

Your contributions make Streamoid better for everyone 🌱

---

## 👤 Author

**Sujal Banakar**
🚀 Developer | Problem Solver | IIT (BHU) Varanasi
📧 [banakarsujal.sanjay.mec23@itbhu.ac.in](mailto:banakarsujal.sanjay.mec23@itbhu.ac.in) | [GitHub](https://github.com/sujalbanakar)

