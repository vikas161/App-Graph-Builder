# App Graph Builder

A small, responsive **App Graph Builder UI** built as a frontend take‑home task. The project demonstrates layout composition, an interactive canvas using React Flow (XYFlow), and a clean React + Vite setup using **JavaScript** (no TypeScript).

---

## 🚀 Setup Instructions

### Prerequisites

* Node.js **18+**
* npm (comes with Node)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

### Other Scripts

```bash
# Production build
npm run build

# Preview production build
npm run preview

# Run ESLint (JavaScript + React)
npm run lint
```

---

## 🧩 Key Decisions

* **React + Vite**
  Chosen for fast development, modern tooling, and minimal configuration.

* **JavaScript (ES Modules)**
  The project is intentionally kept in JavaScript for simplicity and faster iteration during the take‑home task.

* **React Flow (XYFlow)**
  Used to render the central canvas and service nodes, demonstrating graph‑based UI interactions.

* **Tailwind CSS**
  Used for rapid styling and consistent dark‑theme UI aligned with the provided design.

* **Zustand**
  Lightweight state management for selected nodes and UI state, avoiding unnecessary complexity.

* **Component‑based Layout**
  Layout is split into logical parts (TopBar, LeftRail, RightPanel, FlowCanvas, Nodes) for clarity and maintainability.

* **ESLint**
  Added to enforce basic React and JavaScript best practices and maintain readable, consistent code.

---

## ⚠️ Known Limitations

* **No TypeScript**
  The project does not use TypeScript; type safety is not enforced at compile time.

* **No backend integration**
  All data is static or mock‑driven; no real API calls are implemented.

* **Limited interactions**
  Node inspector controls are primarily visual and do not persist configuration.

* **Not fully pixel‑perfect**
  The UI closely matches the provided screenshot but prioritizes structure and clarity over exact pixel accuracy.

* **No authentication or user management**
  Profile/avatar and top‑bar actions are static placeholders.

---

## 📌 Notes

This project focuses on **clarity, correctness, and clean UI architecture**, as requested in the task. Extra features were intentionally avoided to keep the implementation easy to understand and review.

---


