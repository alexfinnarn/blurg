---
title: "Getting to Know Hugo"
date: 2021-09-04T17:45:15-05:00 
draft: false
---

While I've heard about Hugo as a great experience for personal blogging, it's taken me awhile to dig
in and find out more. For a long time, I was a medium.com user, and I enjoyed not having to think
about publishing my content.

That was until I started trying to write for royalty monies and saw how paywalling content sucks for
mostly everyone. I never got paid much and now you can't see some of those articles I wrote...just
like Van Morrison, I'm waiting for my big royalty check in the sky.

After deciding to host my content again, I was faced with the traditional node-based framework setup
with some React or Vue flavoring. However, after years of using node and seeing increasing
complexity and build times, I guess the blazing fast GO CLI experience got me curious enough to look
around.

Earlier on when I first checked out Hugo, I don't recall as many of the content management features
being available, but at this point, I'm finding everything I'd ever need to host a personal blog
site and in the slimmest package possible.

To get going though, we won't go into any of the content management features that set Hugo apart
from other static site generators. In this post, I'll simply go through my initial experience
setting up this blog and publishing the first post.

## Create A Site

To create a site, it is best
to [install the Hugo CLI utility](https://gohugo.io/getting-started/installing/)
first. The CLI gives you many useful commands, and one of them is for creating new Hugo projects.

```shell
hugo new site blurg 
```

After running the site generator you will have a few directories created along with a configuration
file. I was a bit taken aback by the spartan output wondering where all the files were running the
code. The CLI takes care of all the hard work behind the scenes leaving you with a clean slate to
create content off of.

The first file you might think to check would be the main configuration file: `config.toml`, but
you'll only see three lines included: baseURL, languageCode, and title...which are all pretty
self-explanatory.

## An Aside On `toml`

Before I started working with Hugo, I generally used three ways of loading configuration into a
project:

- **JSON** - Even though it isn't flexible at all, JSON seems to be the standard for sharing not
  only data but also configuration. Not being able to make code comments is one reason you tend to
  see less and less usage of JSON for configuration purposes.
- **YAML** - I first encountered YAML via Ansible while working on local development setups. It
  wasn't long after, that I saw YAML used for application development and now even CI tool usage,
  like GitHub Workflows.
- **Native Language** - It is far more powerful to use the native language loading the configuration
  than an arbitrary one, like YAML or JSON, since you can use logic. If I want to load different
  configuration for a development environment than in production, it's easy to do. With JSON or
  YAML, you'd have to use the native language to load two different files, but loading partial
  config would get very tedious.

...and now we have TOML to explore. Why did it show up in Hugo? Why have I not seen it before? I
thought these were good questions to answer in this introductory post since you can use Yaml Toml or
JSON for Hugo configuration files.

We'll [look into TOML's history](/yargh/toml-config.html) in a different blog post.

## Create A Theme

After creating the initial site skeleton, you'll need a way to render any content you create. Hugo
has the concept of "themes" that you can create or download. In fact, the official Hugo tutorial
asks you to download a theme from an online repository.

Since I'm trying to learn Hugo and Go as I write these blog posts, I decided to generate my own
theme via the CLI.

```shell
hugo new theme roost
```

That command creates a theme that "roosts" in `./themes/roost`...ba da dum, chh!

Creating the theme in a separate directory allows for overriding theme layout files, at least I
think. We'll see more on this in a later post, and maybe I'll eat my words then.

Instead of continuing in the themes' directory, I decided to move all my theme files into the
main `/layouts` directory created from the skeleton. There's not much to look at in the initial
files, but I knew my next step should be to add my favorite CSS framework.

## Tailwind CSS Setup

I credit [this blog post](https://praveenjuge.com/blog/install-tailwind-on-hugo/) for getting me
started with adding Tailwind CSS to the blog. It goes through all the information you need to add
Tailwind, but the key is in `/layouts/partials/head.html`...

```html

<head>
  <title>{{ .Title }}</title>

  {{ $styles := resources.Get "css/main.css" }}
  {{ $styles = $styles | resources.PostCSS (dict "inlineImports" true) }}

  {{ if hugo.IsProduction }}
  {{ $styles = $styles | minify }}
  {{ end }}

  <link href="{{ $styles.Permalink }}" rel="stylesheet"/>
</head>
```

There you can see the Hugo Pipelines feature working to process a `main.css` file that includes all
my Tailwind + custom CSS rules via PostCSS. It's quite nice that you don't have to run any CLI build
command or anything to build or minify the output like you might with other static site
generators.

## Create Your First Post

Hugo's CLI makes it easy to create content with one command.

```shell
hugo new posts/my-new-bizzness.md
```

After the CLI command finishes, you'll have a new markdown file in the `content/posts` directory
with front matter similar to what is listed below.

```markdown
---
title: "My New Bizzness"
date: 2021-09-04T17:45:15-05:00 draft: true
---
```

The generator uses an "archetype" to create the content scaffolding and front matter. Initially,
your project will only include a default archetype, located at `/archetypes/default.md`, that
includes the title, data, and draft fields.

The `date` will obviously change and reflect the current timestamp when you created the post, but
the `draft` field is worth explaining in a bit more detail. I wish they had called it the `publish`
field which I think makes more sense in what you're eventually trying to achieve.

By setting `draft: true`, the post won't be included in the output that Hugo creates.

Now you need to figure out how to go to the URL your blog post is published at.
`http://localhost:1313/posts/my-new-shizz` would seem like the best place to try, but that doesn't
work with default configuration.

## Alter Posts Template

At least it looks like the route doesn't work. That's because there's no template for Hugo to render
the post into. You can either add HTML to the `/layouts/_default/single.html` file or more likely
create a `single.html` file for your specific content type.

In this example, we will create the file at `/layouts/posts/single.html`.

```gotemplate
{{ define "main" }}
<section id="main" class="">
    <div class="bg-blue-700 relative shadow bg-blend-hue bg-opacity-95"
         style="background-image: url('https://my.img.com/')">
        <div class="md:max-w-screen-md mx-auto flex flex-col-reverse h-64">
            <h1 id="title" class="text-yellow-100 text-4xl text-white shadow-md">
                {{ .Title }}
            </h1>
        </div>
    </div>
    <div class="md:max-w-screen-md mx-auto p-4">
        <article id="content">
            {{ .Content }}
        </article>
    </div>
</section>
{{ end }}
```

I posted my entire template file, which is not that lengthy, and it simply creates a header with the
title overlaid on a background image and the content in a medium width container.

The `{{.Content}}` variable is part of what comes out of the markdown file. You can gather the front
matter variables, like `{{.Title}}`, as well as the main post content.

We can see where the `{{define "main"}}` part is used in the `/layouts/_default/baseof.html` file.

```gotemplate
<!DOCTYPE html>
<html>
{{- partial "head.html" . -}}
<body class="flex flex-col min-h-screen">
{{- partial "header.html" . -}}
<div id="content" class="flex-grow">
    {{- block "main" . }}{{- end }}
</div>
{{- partial "footer.html" . -}}
</body>
</html>
```

The `block "main""` in the base HTML layout will yield to the list or single file's main block
content.

...and that's it. Now you can go back to your `http://localhost:1313/posts/my-new-shizz` and see
some content. Your site visitors will never be able to find you this way, and that's why we'll
create a navigation header and footer in the next post in this series.
