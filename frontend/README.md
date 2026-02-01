# 🎓 Student Management System (MERN Stack)

A full‑stack **Student Management System** built using the **MERN stack** with **Bootstrap** for UI styling. This project allows efficient management of student data with optimized performance and clean code architecture.

---

## 🚀 Features

* Add, update, delete, and view students
* Search, filter, and sort student records
* Responsive UI using Bootstrap
* Optimized state management using React Hooks
* Separate CSS files for better maintainability
* RESTful API integration
* Clean and modular folder structure

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap
* JavaScript (ES6+)
* CSS (separate files per component)
* React Hooks (`useState`, `useEffect`, `useContext`)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```
student_management/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Global state (Context API)
│   │   ├── css/            # Separate CSS files
│   │   ├── pages/          # Page components
│   │   └── App.jsx
│
├── server/                 # Node & Express backend
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   └── server.js
│
└── README.md
```

---

## ⚙️ State Management & Optimization

* Used **React Hooks** instead of class components
* Centralized global state using **Context API**
* Avoided unnecessary re‑renders
* Used reusable components
* Optimized API calls and component structure

---

## 🎨 Styling

* Bootstrap for layout and responsiveness
* Separate CSS files for each component
* Clean and consistent UI design

---

## 🔌 API Endpoints (Example)

* `GET /students` – Get all students
* `POST /students` – Add a new student
* `PUT /students/:id` – Update student details
* `DELETE /students/:id` – Delete a student

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/student_management.git
```

### 2️⃣ Install Dependencies

**Frontend**

```bash
cd client
npm install
```

**Backend**

```bash
cd server
npm install
```

### 3️⃣ Run the Application

```bash
# Backend
npm start

# Frontend
npm start
```

---

## 📌 Future Improvements

* Authentication & authorization
* Pagination
* Role‑based access

---

## 🙌 Author

**Deepali Singal**
Self‑trained MERN Stack Developer

---

⭐ If you like this project, give it a star!
