# DOCTORAZ - An Interactive Platform for Learning Go

Welcome to DOCTORAZ, a comprehensive, open-source educational platform designed to provide an interactive and integrated learning path for the Go programming language, from beginner to advanced concepts.

---

## ✨ Key Features

* **📚 Comprehensive Lessons:** A wide range of lessons covering all aspects of the Go language.
* **💪 Interactive Exercises:** Practical exercises to apply the concepts you've learned.
* **🧠 Programming Challenges:** Challenges to test problem-solving and logical thinking skills.
* **📝 Assessment Exams:** Quizzes to measure progress and understanding of the material.
* **🗺️ Guided Learning Path:** An organized learning path that guides users through quests and projects from start to finish.

---

## 📂 Project Structure

The project is organized in a modular way to separate concerns and facilitate development.

```
golang_learn/
│
├── 📄 index.html              # Main page and entry point for the platform
│
├── 📁 css/
│   └── 🎨 style.css           # Main styling and theme files
│
├── 📁 js/
│   ├── 🧠 challenges.js     # Data for programming challenges
│   ├── 📝 exam.js           # Data for exam questions
│   ├── 💪 exercises.js     # Data for interactive exercises
│   └── 📚 lessons.js       # Data for educational lessons
│
├── 📁 js_main/
│   └── ⚙️ main.js           # Main application logic
│
├── 📁 secsion/
│   └── ❓ viewquest.html    # Page for viewing Quest details
│
└── 📁 map/
    │
    ├── 📄 map_config.json     # Main configuration file for the learning map
    │
    └── 📁 data/               # Data files for quests and projects
        ├── 📄 cp[1-3].json   # Checkpoint data
        ├── 📄 final.json    # Final checkpoint data
        ├── 📄 quad.json     # Side project data
        ├── 📄 q[1-12].json   # Quest data
        └── ...
```

---

## 🚀 Technologies Used

* **HTML5:** For structuring the content.
* **CSS3:** For styling and visual presentation.
* **JavaScript (ES6 Modules):** For providing interactivity and dynamic functionality.

---

## 💡 How to Use

1. Clone this repository to your local machine.
2. Open the `index.html` file in your browser to start using the platform.

Contributions to improve the platform and add more content are always welcome!

