---
title: "Installing Stimulus"
date: 2021-10-08T20:53:49-05:00
draft: false
---

It doesn't take long while building out a website before you end up needing to code up user 
interaction, usually via clicking on an element. Before reaching for React or Vue, you can start 
out with vanilla JS to quickly add an event listener.

```js
myElement.addEventListener('click', () => console.log('hello world'))
```

But then you need to make sure the listener gets attached and detached from each element. This is a 
task most people delegate to Vue or React where special template syntax allows you to call a 
function when the user clicks on an element. Vue or React then translates the click behavior 
from the Virtual DOM to the actual DOM. I know I'm probably not the only one whose been caught 
with a ghost event listener bug before due to improperly detaching an event in component garbage 
collection.

Vue is better than React as far as standards go, but you still end up heading down the path 
towards a very involved approach for such simple user behavior. In projects where the user 
clicks around and fills out forms, it always felt like overkill for me to add a frontend 
framework. I think the heft also contributes to "decoupled" seeming like a good idea, but that's 
a story for another day.

What if you didn't need a build system and solely wanted a framework to attach a bit of behavior to 
HTML you already generated with a server?

## Enter Stimulus

> A modest JavaScript framework for the HTML you already have.

Stimulus targets the developers interested in maintaining server-side control of 
HTML markup. They come with a "thin client" mindset and are thrilled to try out a framework that 
barely appears to be a framework at all. I am part of that target audience. 

I will say that Stimulus has a way to go in providing great documentation that everyone 
can use to incorporate it into their project. By reading [the closest documentation I could find 
relating to installation](https://stimulus.hotwired.dev/handbook/installing) I got a sense on 
how I might go about adding it to this site, but I would have liked a some kind of tutorial to 
go along with the examples. I'll get into open source documentation best practices in other 
posts, but outside the few examples in their guide, you'll be left piecing together knowledge 
from various blog posts.

## Import at the Head

In these crazy times of modern browsers, you can now import modules straight into your HTML 
documents. Coming from the `yarn add my-package` side of things, I find it refreshing to import 
external code right into the place where you use it without the need for a centralized package 
manager. I'm not sure tree shaking or other kinds of optimizations can be handled without a 
build system, but for my blog, I'll only be using a couple of dependencies, so I'm not too 
worried about performance differences.

```html
  <!-- Import Stimulus script in layouts/partials/head.html -->
  <script type="module" src="/app.js" defer></script>
</head>
```

By specifying the type as `module`, the browser allows you to include JS that looks like any 
you'd write in a frontend project. The file I'm importing simply declares a default class export 
with a simple `connect()` lifecycle method.

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
ways to interact with elements in succinct syntax, and Stimulus borrows from Vue in the syntax used
to tie user behavior to callbacks.

## Revealing the Factory of Sadness

Technically, we've installed Stimulus in a two-step process: including a script tag in the head 
of the document and initializing Stimulus and registering a controller in another script. I 
could stop writing here and still fulfill the promise of this post's title, but what would you 
really have learned then? So let's reveal a factory of sadness that I can 
admit to visiting at least a couple of times, drinking, screaming, and leaving in...sadness. 

While building my terribly-styled homepage, I got the idea to reveal the YouTube video when a 
user clicks on a "Reveal the Factory of Sadness -->" link. Juvenile, I know, but I have to fill 
all the pretty boxes I wanted to include on my homepage somehow.

We need to let Stimulus know that a click on one element will replace the content of another 
element. With the tagline of "use the HTML you already have", you might guess that we won't 
declare the behavior in JavaScript. Nope, Stimulus has a much simpler way of reading HTML 
attributes to register event listeners while connecting to the HTML.

```html
<main class="home-grid md:max-w-screen-4xl mx-auto"
      data-controller="homepage">
  <a data-action="click->homepage#revealSadness">
    Reveal the Factory of Sadness ->
  </a>
```

The anchor element declares that when a user clicks it, Stimulus should find a `revealSadness` 
method in the `homepage` controller. I think it's very semantic and fits the style I came to 
know in Rails with controllers and actions. 

```js
class HomepageController extends Controller {
  static targets = ['theater'];
  revealSadness() {
    this.theaterTarget.innerHTML = `    
    <div class="shadow-xl w-full h-full">
      <iframe src="https://www.youtube.com/embed/tRBDMMVctu8"
              title="The factory of sadness"
              allowFullScreen></iframe>
    </div>`;
  }
}
```

In the actual controller, the `revealSadness` function simply replaces the inner HTML of an 
element target with a YouTube video embed. 

The `static` keyword might jump out to you as it did me. This simply means that each instance of 
the class will have a "targets" property that you can call directly instead of having to 
instantiate a class first. I'm not sure what Stimulus does internally with the static properties,
but it probably helps with caching and/or cloning when new elements appear in the DOM.

```html
<div class="curtains centered md:h-64 lg:h-auto"
   data-homepage-target="theater"
   id="theater">
</div>
```

All we have to do then is connect the `theaterTarget` with an element on the page with a 
specifically named HTML attribute. You'll notice naming conventions throughout Stimulus, which 
reminds me of Rails again, and in this case we have to prefix with `data-`, provide the name of 
the controller `homepage`, and declare this a `-target` with the name `theater`: hence using 
`theaterTarget` in the controller code.

After wiring this all up, I now have a way to fire a callback for any event that might happen. 
We'll get into more complicated ways to interact in future posts, but since clicking is most of 
what users do on the web, I think it's amazing that we now have such a simple, but structured 
way to go about our business using web standards and not framework abstractions.
