# Micro-Responsive CSS Framework

![](https://i.imgur.com/Brxeuno.gif)

**Micro-Responsive CSS Framework** is a set of **CSS** classes that helps fast-prototype responsive interfaces. It is **only 0.6kb** and includes support for *desktop, tablet and mobile mediaqueries*. The game is simple: add the proper class if you need/want a certain **HTML** tag be visible or not.

### Example:

```html
<div class="mobile-only">
	this will be visible only in mobile devices with (max-width: 529px)
</div>
```
	
You can also combine them:

```html
<div class="desktop-only tablet-only">
	this will be displayed in desktop & tablet breakpoints
</div>
```
	
### Use:

Place **microresponsive.min.css** or it content in your project. Use the **CSS** classes as needed:

- desktop-only: `@media only screen and (min-width: 950px)`
- tablet-only: `@media only screen and (min-width: 530px) and (max-width: 949px)`
- mobile-only: `@media only screen and (max-width: 529px)`

### Demo:
[https://github.com/juanbrujo/microresponsive/blob/master/dist/demo.html](https://github.com/juanbrujo/microresponsive/blob/master/dist/demo.html)

### Disclaimer:

I recommend use this only in prototype phase of a project, not in production. Why? Simple: showing and hiding **HTML** elements can damage your **SEO** intentions. But if you don't care about **SEO**, go and enjoy this.
