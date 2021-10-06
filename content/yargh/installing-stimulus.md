---
title: "Installing Stimulus"
date: 2021-10-03T20:53:49-05:00
draft: true
---

It doesn't take long while building out a website before you end up needing to code up user 
interaction, usually via clicking on an element. Before reaching for React or Vuew, you can use 
vanilla JS to quickly add an event listener.

```js
myElement.addEventListener('click', () => console.log('hello world'))
```

But then you need to make sure the listener gets attached and detached from each element. This is a 
task most people delegate to Vue or React where special template syntax allows you to call a 
function when the user clicks on an element. 

Vue is better than React as far as standards go, but you still end up heading down the path 
towards a very involved approach for such simple user behavior. In projects where the user 
clicks around and fills out forms, it always felt like overkill for me to add a frontend 
framework. I think the heft also contributes to "decoupled" seeming like a good idea, but that's 
a story for another day.

What if you didn't need a build system and solely wanted a framework to attach a bit of 
behavior to HTML you already generated with a server?

## Enter Stimulus

> A modest JavaScript framework for the HTML you already have.

Stimulus targets the developers interested in maintaining server-side control of 
HTML markup. They come with a "thin client" mindset and are thrilled to try out a framework that 
barely appears to be a framework at all. I am part of that target audience. 

I will say that Stimulus has some way to come in providing great documentation that everyone 
can use to incorporate it into their project. By reading [the closest documentation I could find 
relating to installation](https://stimulus.hotwired.dev/handbook/installing) I got a sense on 
how I might go about adding it to this site, but I would have liked a some kind of tutorial to 
go along with the examples.

## Import at the Head

In these crazy times of modern browsers, you can now import modules straight into your HTML 
documents. Coming from the `yarn add my-package` side of things, I find it refreshing to import 
external code right into the place where you use it without the need for a centralized package 
manager. I'm not sure tree shaking or other kinds of optimizations can be handled without a 
build system, but for my blog, I'll only be using a couple of dependencies.

```html
  <!-- Import Stimulus script in layouts/partials/head.html -->
  <script type="module" src="/app.js" defer></script>
</head>
```

By specifying the type as `module`, the browser allows you to include JS that looks like any 
you'd write in a frontend project. 

```js
import { Controller, Application } 
  from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
export class HelloController extends Controller {
  connect() {
    console.log('Hello Gerald!');
  }
}
window.Stimulus = Application.start();
Stimulus.register("hello", HelloController);
```

By using a CDN, we offload the loading of heavier JS resources to the vendors who are good at 
serving them up. I'm not going to try and extol the virtues of including code this way without 
using any bundle system, but I can appreciate the simplicity of it all.

Now, whenever any HTML element with the attribute `data-controller="hello"` loads, the `connect` 
function runs and "Hello Gerald!" is printed in the console. Gerald, what a guy...do you know one?

I think it's swell I don't have to concern myself with attaching the JS and only what needs to 
happen with each instance on the screen. Frameworks like React and Vue are great for providing 
ways to interact with elements on the screen and keeping state localized and tidy. 

## Revealing the Factory of Sadness

Technically, we've installed Stimulus in a two-step process: including a script tag in the head 
of the document and initializing Stimulus and registering a controller in another script. I 
could stop writing here and still fulfill the promise of this post's title.

But what would you really have learned then? So let's reveal a factory of sadness that I can 
admit to visiting at least a couple of times, getting drunk, and leaving in...sadness. 

While building my terribly-styled homepage, I got the idea to reveal the YouTube video when a 
user clicks on a "Reveal the Factory of Sadness -->" link. Juvenile, I know, but I have to fill 
all the pretty boxes I wanted to include on my homepage somehow.


