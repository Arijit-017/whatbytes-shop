# 🛍️ WhatBytes Shop

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-black)
![Status](https://img.shields.io/badge/Status-Live-success)

A modern, responsive, and scalable e-commerce web application developed as a technical assignment for the **Frontend Developer Intern role at WhatBytes**.

The project demonstrates frontend engineering skills by implementing a complete shopping experience using modern Next.js architecture, API integration, dynamic routing, reusable components, and cart management.

## 🌐 Live Demo

🚀 **Live Application:** [https://whatbytes-shop.vercel.app/](https://whatbytes-shop.vercel.app/)

📂 **GitHub Repository:** [https://github.com/Arijit-017/whatbytes-shop](https://github.com/Arijit-017/whatbytes-shop)

---

## 📌 Project Overview

WhatBytes Shop is a fully responsive e-commerce application that allows users to browse products, view detailed product information, and manage their shopping cart seamlessly.

The application focuses on:

- Clean architecture
- Reusable components
- Responsive UI design
- Modern React development practices
- Optimized performance with Next.js

---

# 🚀 Features

## 🏠 Home Page

- Fetches products from FakeStore API
- Displays products in a responsive grid layout
- Product image, title, category, price, and rating
- Fast navigation to product details page

## 📄 Product Details Page

- Dynamic route-based rendering
- Displays:
  - Product image
  - Product title
  - Description
  - Category
  - Price
  - Rating

## 🛒 Shopping Cart

- Add products to cart
- Remove products from cart
- Increase/decrease quantity
- Dynamic total price calculation
- Persistent cart state

## 📱 Responsive Design

- Desktop optimized
- Tablet optimized
- Mobile optimized

## ⚡ Performance

- Optimized routing
- Reusable components
- Efficient rendering

---

# 🛠️ Tech Stack

## Frontend

- Next.js 16
- React 19

## Styling

- Tailwind CSS

## Routing

- Next.js App Router

## State Management

- React Hooks
- Context API / Local State

## API

- FakeStore API

## Development Tools

- Git
- GitHub
- npm

---

# 🏗️ Project Architecture

```text
whatbytes-shop/

├── app/
│
├── app/page.jsx
│
├── app/cart/page.jsx
│
├── app/product/[id]/page.jsx
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   └── CartItem.jsx
│
├── context/
│   └── CartContext.jsx
│
├── public/
│
├── utils/
│   └── api.js
│
├── package.json
│
└── README.md
```

---

# 🏛️ Detailed Architecture

## 1. App Router Layer

The application uses Next.js App Router for file-based routing.

Routes:

### `/`

Home page

### `/cart`

Shopping cart page

### `/product/[id]`

Dynamic product details page

---

## 2. API Layer

Responsible for data fetching.

Functions:

- Fetch all products
- Fetch product details
- Handle API errors

Data Source:

```text
https://fakestoreapi.com/products
```

---

## 3. Component Layer

The application is built using reusable components.

### Header

- Logo
- Navigation links
- Cart indicator

### ProductCard

Displays:

- Product image
- Product title
- Product price
- Product rating
- Add to cart button

### CartItem

Displays:

- Product information
- Quantity controls
- Remove button

### Footer

Contains:

- Project information
- Developer information

---

## 4. State Management Layer

Handles application state.

Stores:

- Cart items
- Product quantities
- Total price

Implemented using:

- React Hooks
- Context API

---

## 5. Styling Layer

Implemented using Tailwind CSS.

Benefits:

- Utility-first approach
- Faster development
- Responsive UI
- Clean design system

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Arijit-017/whatbytes-shop.git
```

## Move Into Project

```bash
cd whatbytes-shop
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🏭 Production Build

Build the application:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

---

# 📱 Responsive Support

Supports:

- 💻 Desktop
- 🖥️ Laptop
- 📱 Mobile
- 📟 Tablet

---

# 🎯 Assignment Objectives Covered

✅ API Integration

✅ Dynamic Routing

✅ Cart Functionality

✅ Responsive Design

✅ Clean Component Architecture

✅ Performance Optimization

✅ Modern React Practices

✅ Next.js App Router

---

# 👨‍💻 Developer

**Arijit Ghosh**

B.Tech in Information Technology

Haldia Institute of Technology

GitHub: https://github.com/Arijit-017

---

# 📄 Assignment Information

This project was developed as a technical assignment for the **Frontend Developer Intern role at WhatBytes**.

The objective was to demonstrate frontend development skills, clean architecture design, API integration, responsive UI implementation, and modern React/Next.js development practices.