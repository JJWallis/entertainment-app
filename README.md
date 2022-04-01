# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)
-  [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the app depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
-  Add/Remove bookmarks from all movies and TV series
-  Search for relevant shows on all pages
-  Bonus: Build this project as a full-stack application
-  Bonus: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Screenshot

![](./screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  [React](https://reactjs.org/) - JS library
-  [Next.js](https://nextjs.org/) - React Framework
-  [TailWind CSS](https://tailwindcss.com/)

### What I learned

```jsx
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
   return <>...</>
}
```

This is currently my first project using Next.js as a meta framework built on top React that I decided to use since this project requires me to build out a full stack entertainment application involving state management, fetching data from a local JSON file and implementing client-side routing to four different pages. Handling routing in Next is much simpler than using the popular library React Router, since it's modelled around our file and folder structure inside the pages directory where each file represents a different route available to the app. As shown above, Next also exposes specific components to us like `Image` that provide built in optimisation benefits and a more intuitive API for managing that type of data.

```jsx
<input
   placeholder="Search for movies or TV series"
   className="outline-none w-[100%] border-b-2 border-b-slateBlue border-opacity-0 pt-2 caret-red text-headingSM text-white bg-deepBlue hover:border-opacity-100 focus:border-opacity-100 transition-border duration-150 ease-in-out"
/>
```

```jsx
export * from './Search'
export { default } from './Search'
```

### Continued development

### Useful resources

-  [Next.js Docs](https://nextjs.org/docs) = The Next docs are a great resource to learn how to incorporate Next into our projects as well as all the beneficial features it adds on top of React.

-  [TailWind CSS Docs](https://tailwindcss.com/) = Likewise, the TailWind docs are also my go to resource for primarily learning how to setup its configuration and all the utility classes they expose to us.

-  [FireShip - TailWind CSS Tutorial](https://www.youtube.com/watch?v=pfaSUYaSgRo&ab_channel=Fireship) = This tutorial by FireShip was a great introduction to using the TailWind framework and learning more about why we might choose to write our CSS in this manner instead of the other methods available to us.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
