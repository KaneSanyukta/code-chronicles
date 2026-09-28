# JavaScript Form → Dynamic Card

A small JavaScript mini-project where **form input becomes a card instantly**.

No database. No framework. No magic.

Just **HTML + CSS + JavaScript + DOM manipulation** — a simple exercise in making a webpage actually respond to the user.

## What does it do?

You enter information into a form → submit it → JavaScript reads the values → creates a card → inserts it into the page.

Think of it as:

`User types → Event happens → JS reacts → DOM changes`

## Concepts I Practiced

### 1. Event Handling

JavaScript listens for an action such as form submission.

```js
form.addEventListener("submit", (event) => {
    // handle form data
});
```

The webpage doesn't just sit there looking pretty.
It waits for something to happen.

> "You clicked submit? Okay, my turn."

### 2. Selecting DOM Elements

I used DOM selectors to find the elements I need:

```js
document.querySelector("#name");
document.querySelector(".form");
```

This is basically JavaScript saying:

> "I know you're somewhere in this HTML. Come here."

### 3. Reading Input Values

The value entered by the user can be accessed through:

```js
input.value
```

So the typed data can move from the **form → JavaScript → card**.

### 4. `event.target`

The event object tells JavaScript what triggered the event.

```js
event.target
```

For a form submission, it refers to the form that triggered the event.

Think of it as JavaScript asking:

> "Who called me?"

### 5. Dynamic DOM Manipulation

The interesting part happens here.

Instead of writing every card manually in HTML, JavaScript creates and inserts the content dynamically.

That means the UI changes based on **user input**, not hardcoded data.

## The Flow

```text
User enters data
       ↓
Form submission
       ↓
Event Listener catches it
       ↓
JavaScript reads input.value
       ↓
Card is created
       ↓
Card is inserted into the DOM
       ↓
User sees the result
```

## Why this tiny project matters

This may look like a small project, but it covers the foundation of many real web applications:

* DOM selection
* Event handling
* Form handling
* Reading user input
* Dynamic UI updates
* Creating and modifying HTML elements
* Connecting user actions with application behavior

The project is small.

The concepts aren't.

## Tech Stack

* HTML
* CSS
* JavaScript
* DOM API

## Key Takeaway

The main idea I practiced here is simple:

> **Don't just display a webpage. Make the webpage respond.**

This mini-project is one small step toward understanding how interactive web applications work under the hood.


<video controls src="User Profiles - Profile 1 - Microsoft​ Edge 2026-09-28 20-00-04.mp4" title="Title"></video>