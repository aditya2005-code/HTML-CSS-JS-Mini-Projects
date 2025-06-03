#A curated collection of beginner to intermediate-level front-end web development mini projects created using HTML, CSS, and JavaScript. These projects are perfect for learners looking to build hands-on experience with interactive UI components, responsive layouts, and basic JavaScript logic.

📁 Projects Overview
1. 🎧 Spotify Clone
--A basic front-end recreation of Spotify's UI:

--Responsive layout with a sidebar, controls, and playlist section.

--Interactive play/pause buttons.

--Mimics Spotify’s theme and aesthetic using CSS Flexbox and Grid.

--JavaScript used to handle audio play functionality and dynamic updates.

2. 🏦 Banking Website
--A multi-page banking website concept:

-Homepage with sections like services, features, and testimonials.

-Responsive navbar and footer.

-CSS animations for smooth scrolling and transitions.

-Could include forms for login or sign-up (depending on code).

3. 📋 Menu Bar
--An animated and responsive menu/navigation bar:

-Horizontal navbar with dropdowns or hover animations.

-Mobile responsiveness with a hamburger menu using JavaScript.

-CSS hover effects and transitions for a polished UI.

🛠️ Technologies Used
#HTML5 for structuring content.

#CSS3 with Flexbox/Grid and animations for layout and design.

#JavaScript (ES6) for dynamic interactivity (DOM manipulation, event handling).

4.📋To-Do List App with Priority Sorting

## Description

This is a simple web-based To-Do List application that allows users to add tasks with associated priorities (High, Medium, Low). Tasks can be marked as completed using checkboxes, and the list dynamically sorts tasks based on their priority to help users focus on the most important items first.

---

## Features

- Add tasks with priority selection.
- Display tasks sorted by priority (High → Medium → Low).
- Mark tasks as completed by checking the checkbox (text gets strikethrough).
- Real-time console logging of current tasks and completed tasks.
- Clear input after task addition.

---

## How to Use

1. **Add a Task:**
   - Enter the task description in the task input box.
   - Select the priority from the dropdown.
   - Click the **Add Task** button.
   
2. **View Tasks:**
   - Tasks will be displayed in a list sorted by priority.
   - Each task shows a checkbox to mark it complete or incomplete.

3. **Mark Task Completed:**
   - Click the checkbox next to a task to mark it completed (it will be crossed out).
   - Uncheck to mark it incomplete.

---

## Code Structure Overview

- **HTML Elements:**
  - Task input field
  - Priority dropdown selector
  - Add Task button
  - Ordered list (`<ol>`) for tasks display

- **JavaScript:**
  - Array `todo` stores task objects: `{ task: string, priority: string }`
  - `addTaskButton` event listener adds tasks and calls `displayTasksByPriority()`
  - `displayTasksByPriority()`:
    - Sorts `todo` array by priority
    - Clears and repopulates task list with sorted tasks
    - Attaches checkbox event listeners to handle completion toggling

---

## Example Usage

```js
todo.push({ task: "Finish project report", priority: "High" });
displayTasksByPriority();


🚀 How to Run
#Clone the repository:

bash
Copy
Edit
git clone https://github.com/aditya2005-code/HTML-CSS-JS-Mini-Projects
Open any project folder.

Launch the index.html file in your browser (or use Live Server in VS Code).
