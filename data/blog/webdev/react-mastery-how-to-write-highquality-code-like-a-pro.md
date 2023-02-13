---
title: "React Mastery: How to Write High Quality Code Like a Pro"
date: '2023-02-11'
tags: ['cheatsheet','webdev']
draft: false
summary: This blog provides a comprehensive guide to best practices for writing clean and efficient code in React. From using modern ES6 syntax to utilizing functional components, this article covers everything you need to know to take your React skills to the next level. By following these tips and tricks, you can write code that is easy to understand, maintain, and scale over time. Whether you're a seasoned React developer or just starting out, this guide is an essential resource for maximizing your skills.
images: []
layout: PostLayout
canonicalUrl:
authors: ['default']
---

# Best Practices for Building Reactive User Interfaces with React

React is a popular JavaScript library for building user interfaces that are both dynamic and responsive. It offers a powerful set of features for building scalable, efficient, and maintainable applications. In this blog post, we will explore some of the best practices for building user interfaces with React.

# ES6 Syntax

One of the key features of React is its use of ES6 syntax. This enables developers to write code that is concise and expressive. You should take advantage of the latest features of ES6, such as arrow functions, template literals, and destructuring, to make your code more readable and maintainable.

Here is an example of a simple component that uses ES6 syntax:

# Use Arrow Functions

Arrow functions are a great way to simplify your code. They allow you to write functions that are more concise and easier to read. In React, arrow functions are commonly used as anonymous functions that are passed as props to child components.

Here is an example of a component that uses arrow functions:

```javascript
const add = (a, b) => {
  return a + b;
}
```

# Use Template Literals

Template literals are a powerful feature of ES6 that allow you to embed expressions within strings. In React, you can use template literals to simplify your JSX code and make it easier to read.

Here is an example of a component that uses template literals:

```javascript
const MyComponent = ({ name }) => {
  return <div>Hello, ${name}!</div>;
};
```

# Use const & let

When declaring variables in React, it's a good practice to use `const` and `let` instead of `var`. This ensures that the scope of your variables is well-defined, making it easier to reason about your code.

Here is an example of a component that uses `const` and `let`:

```javascript
const MyComponent = ({ name }) => {
  const message = `Hello, ${name}!`;
  let color = 'blue';

  return <div style={{ color }}>{message}</div>;
};
```

# Object Destructuring

Object destructuring is a convenient feature of ES6 that allows you to extract values from an object and assign them to individual variables. In React, you can use destructuring to simplify your code and make it easier to read.

Here is an example of a component that uses object destructuring:

```javascript
const myObject = {
	name: "Acid"
	role: "Developer"
}

const { name, role } = myObject;
```

# Defining Objects

When defining objects in React, it's a good practice to use shorthand syntax and object destructuring to make your code more concise and readable.

Here is an example of a component that defines an object using shorthand syntax and destructuring:

```javascript
const fruit = {
	name: "Mango",
	sweet: True,
	title: "King of fruits 💪🏻"
}

const { name, sweet, title } = fruit;
```


# key Prop with map in JSX

When rendering a list of components in React, it's important to include a unique `key` prop for each component. This allows React to keep track of the components and optimize their rendering.

Here is an example of a component that uses the `key` prop with `map` in JSX:

```javascript
const MyComponent = ({ names }) => {
return <ul>{names.map(name => {
	<li key={name}>{name}</li>
})}</ul> 
};
```


# Component Name Should be in PascalCase

In React, it's a good practice to name your components using PascalCase. This makes it easier to distinguish your components from regular HTML elements.

Here is an example of a component named using PascalCase:

```javascript
const MyComponent = () => {
	return <div>Follow Me!</div>
}
```


# Variable & Function Names Should be in camelCase

In React, it's a good practice to name your variables and functions using camelCase. This makes your code more consistent and easier to read.

Here is an example of a component that uses camelCase for variable and function names:

```javascript
const Component = ({ name }) => {
	const myVariable = `Hello, ${name}!`;
	function myFunction() {
		// Some Code
	}
	return <div>{myVariable}</div>;
}
```


# Check null & undefined for Objects & Arrays

In React, it's important to check for `null` and `undefined` values before rendering objects and arrays. This ensures that your components don't throw errors and display unexpected results.

Here is an example of a component that checks for `null` and `undefined` values:

```javascript
const Hello = ({age}) => {
	if(!age) {
	return <div>Please provide your age 😥</div>
	}

	return <div>You are {age} years old!</div>
}
```


# Avoid DOM Manipulation

In React, it's important to avoid manipulating the DOM directly. Instead, you should let React handle the updates to the UI and take advantage of its built-in optimizations.

Here is an example of a component that uses DOM manipulation:

```javascript
<div id="dom"></div>

const link = document.getElementById("dom")
link.textContent = 'AcidOP on top';
```


# Remove Every Event Listener in useEffect

In React, it's important to remove event listeners when a component is unmounted. This helps to prevent memory leaks and improve the performance of your application.

Here is an example of a component that removes event listeners in `useEffect`:

```javascript
import { useState, useEffect } from 'react'

const Hello = () => {
const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

	return () => {
		setCount(0)
	}
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}
```


# Functional Components are Recommended

In React, it's recommended to use functional components whenever possible. They are easier to write, understand, and test than class components. Additionally, they can be optimized by React with functional updates.

Here is an example of a functional component:

```javascript
const Component = () => {
	return <div>AcidOP on top!</div>
}
```

Here is an example of a class component:
```javascript
import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        Hello, World!
      </div>
    );
  }
}

export default HelloWorld;
```


# Create a Habit of Writing Helper Functions

In React, it's a good practice to write helper functions to encapsulate complex logic. This makes your code easier to understand, maintain, and reuse.

Here is an example of a component that uses a helper function:

```javascript
const MyComponent = ({ names }) => {
  const getNameList = () => {
    return names.map(name => <li key={name}>{name}</li>);
  };

  return (
    <div>
      <h2>Names:</h2>
      <ul>{getNameList()}</ul>
    </div>
  );
};
```


# Don't Throw Your Files Randomly

In React, it's important to organize your files in a structured and meaningful way. This makes it easier to find and maintain your code.

For example, you could create a directory for each component and place the component file, its styles, and tests together. You could also create a shared directory for common components and utilities.

```
src:
  components:
    Navbar.tsx
    Footer.tsx

styles:
  Navbar.css
  Footer.css
```


# Use Ternary Operator Instead of if/else if Statements

In React, it's a good practice to use the ternary operator instead of `if/else` statements when possible. This makes your code more concise and easier to read.

Here is an example of a component that uses the ternary operator:

```jsx
const MyComponent = ({ name }) => {
  return <div>
    {name ? `Hello, ${name}!` : 'Please enter a name.'}
  </div>;
};
```


# Conclusion

These are just a few of the best practices for writing clean and efficient code in React. By following these guidelines, you can write code that is easy to understand, maintain, and scale over time. So, try to implement these practices in your next React project and let us know how it works for you!