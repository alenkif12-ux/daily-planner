# 📅 Daily Planner — Task Management App

A clean, responsive task management application built with vanilla JavaScript, SCSS, and Vite. Designed to help users organize everyday activities, manage their to-do lists, and keep track of completed tasks through a simple and intuitive interface.

## 🚀 Live Demo

Check out the live version here: [Open Daily Planner](https://alenkif12-ux.github.io/daily-planner/)

---

## ✨ Features

- **Add Tasks:** Easily create new tasks using the input field.
- **Complete Tasks:** Mark tasks as completed and switch them back to active status whenever needed.
- **Delete Tasks:** Remove tasks from the list with a single click.
- **Dynamic Rendering:** Automatically updates the task list whenever changes are made.
- **Input Validation:** Prevents empty or whitespace-only tasks from being added.
- **Responsive Layout:** Adaptive design optimized for different screen sizes.
- **Interactive UI:** Simple and intuitive task management experience.

---

## 🛠️ Tech Stack

- **JavaScript (ES6+):** Application logic, DOM manipulation, event handling, and dynamic content rendering.
- **SCSS (Sass):** Styling, variables, nesting, and responsive layouts.
- **HTML5:** Semantic markup and application structure.
- **Vite:** Development server and production build tool.
- **npm:** Package and dependency management.

---

## 🧠 JavaScript Concepts

This project provides practical experience with core JavaScript concepts:

- **Arrays & Objects:** Storing and managing tasks as objects inside an array.
- **Array Methods:** Using `map()`, `find()`, and `findIndex()` to manipulate task data.
- **Event Listeners:** Handling user interactions with `addEventListener()`.
- **Event Delegation:** Managing task actions through a single event listener.
- **DOM Manipulation:** Dynamically creating and updating HTML elements.
- **Template Literals:** Generating task elements using dynamic HTML templates.
- **Conditional Rendering:** Updating task appearance based on completion status.
- **Input Validation:** Using `trim()` to validate user input.

---

## ⚙️ Installation & Setup

To run this project locally:

**1. Clone the repository**

```bash
git clone https://github.com/alenkif12-ux/daily-planner.git
```

**2. Navigate to the project directory**

```bash
cd daily-planner
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

---

## 📦 Available Scripts

- `npm run dev` — Starts the development server.
- `npm run build` — Builds the application for production.
- `npm run preview` — Previews the production build locally.
- `npm run deploy` — Builds and deploys the application to GitHub Pages.

---

## 📁 Project Structure

```text
daily-planner/
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
└── src/
    ├── main.js
    └── styles/
        └── main.scss
```

---

## 💾 Data Storage

Tasks are currently stored in a JavaScript array during the application session. They are not saved permanently, so refreshing the page resets the task list.

---

## 👩‍💻 Author

**Alёна**

GitHub: [@alenkif12-ux](https://github.com/alenkif12-ux)

---

*Built with ❤️ as part of my journey into Front-End Development.*
