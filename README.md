# 💸 Expense Tracker - Full Stack Application

This is a full-stack expense tracking web application developed for the SDE Assignment. It allows users to add, edit, delete, and visualize their expenses using interactive charts.

---

## 🚀 Features

- Add, edit, and delete expense records
- Real-time updates on the frontend
- Visualize data with:
  - Pie chart (category-wise distribution)
  - Bar chart (monthly spending trends)
- Clean and responsive UI

---

## 🛠️ Technologies Used

### 🌐 Frontend
- **React.js** — UI rendering and component-based architecture
- **Axios** — for HTTP communication with the backend
- **Chart.js** + **React Chart.js 2** — for creating dynamic charts
- **CSS (custom + media queries)** — for responsive styling

### 🖥️ Backend
- **Node.js** — runtime environment for backend JS
- **Express.js** — API framework for route handling
- **CORS** — middleware to allow cross-origin requests
- **Mongoose** — ODM for MongoDB, schema validation

### 🗄️ Database
- **MongoDB** — used to store expenses (`amount`, `category`, `description`, `date`)

---

## 🧑‍💻 How to Run the Project Locally

> 📦 Prerequisites:  
> - Node.js and npm installed  
> - MongoDB running locally (default port: `27017`)  

### ✅ Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd Expense_tracker
```

## ✅ Step 2: Start the Backend
```bash
cd backend
npm install
npn start
```

## ✅ Step 3: Start the Frontend
```bash
cd ../frontend
npm install
npm start
```


