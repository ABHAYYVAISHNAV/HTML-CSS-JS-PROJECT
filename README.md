# ToDo List App

This is a simple ToDo List app implemented in JavaScript. It allows users to add tasks to a list, mark tasks as completed, and remove tasks from the list.

## Features

- Add tasks to the list.
- Mark tasks as completed by clicking on them.
- Remove tasks from the list by clicking on the "x" icon.
- Data is automatically saved in the browser's localStorage, so tasks persist even after the page is closed.

## Getting Started

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Interact with the ToDo List app by adding tasks and managing them.

## Usage

- Enter a task in the input box.
- Click the "Add" button to add the task to the list.
- Click on a task to mark it as completed. Click again to unmark it.
- Click the "x" icon next to a task to remove it from the list.
- The tasks are automatically saved and loaded using the browser's localStorage.

## Code Overview

The main functionality of the app is implemented in the `script.js` file. Here's a brief overview of the code structure:

- The `addtask` function is called when the "Add" button is clicked. It adds a new task to the list.
- The list's `click` event is used to handle marking tasks as completed and removing tasks.
- The `savedata` function stores the task list in the browser's localStorage.
- The `showdata` function retrieves and displays the stored tasks from localStorage on page load.

## Technologies Used

- HTML
- CSS
- JavaScript

## Acknowledgments

This ToDo List app is a simple demonstration of how to create interactive web applications using HTML, CSS, and JavaScript. It's suitable for learning purposes and can be expanded upon to include more features and improvements.



