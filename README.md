# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size (smartphone, tablet, Desktop)
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![mobile design](./design/design%20mobile.png)
![Tablet Design](./design/tablet%20design.png)
![Desktop Design](./design/design%20dektop.png)
![Active State](./design/active%20state.png)
![Hover State](./design/hover%20state.png)

### Links

- Solution URL: [Solution]([https://your-solution-url.com](https://jonathancabuyales.github.io/space-tourism/)

## My process

### Built with

- Mobile-first workflow
- Flexbox
- CSS Grid
- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- [React](https://reactjs.org/) - JS library
- [React-router-dom](https://reactrouter.com) - Router

### What I learned

I have learned that ux/ui design is very important for users because they see if the workflow of the website is subtle and of course this project helped to realize which one is better to use at a specific time whether flexbox or grid. This could help to make the responsive design faster by writing less css code.

To see how you can add code snippets, see below:

```html
<header className="header">
  <figure className="header__figure">
    <img src={logo} alt="logo" className='header__img' />
  </figure>
  <figure className={menuActive ? header__menu--active : header__menu} onClick={handleMenu} >

  </figure>
</header>
```
```css
@media (width >= 768px) {
    proud of this because I have learned that this can help a lot to make responsive website much easier. 
}
```
```js
const [cursor, setcursor] = useState(index);
let index = parseInt(JSON.parse(sessionStorage.getItem("index"))) || 0;

```

### Continued development

I have to keep practicing my css skills specifically flexbox and grid because doing this challenge I sometimes got frustrated because I couldn't use width and height very well and I realize that when we make a responsive design we have to use max-width and max-height to avoid expanding the whole width or height of the screen. In order not to exceed the height or width.


### Useful resources

- [Inset css property](https://developer.mozilla.org/es/docs/Web/CSS/inset) - I have used this to understand how it works with the position property and how I can put a div in the center.


## Author

- Frontend Mentor - [@JonathanCabuyales](https://www.frontendmentor.io/profile/JonathanCabuyales)


## Acknowledgments

If someone is learning js, css and HTML. I think to make any Mentor frontend page challenge using css you have to know how flexbox, grid and media queries works and then you can move on to using any css framework like bootstrap and twailind to make a beautiful design.
