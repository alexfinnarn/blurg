---
title: "Getting to Know Hugo"
date: 2021-09-04T17:45:15-05:00
draft: false
---

I heard about Hugo for a while before deciding to dive in. I guess the blazing fast GO CLI 
experience got me curious enough to look around, and after leaving a world of many second JS 
build times, I don't think I'll be looking back. 

Earlier on when I checked out Hugo, I don't recall as many of the content management features being
available, but currently, I'm finding everything I'd ever need to host a personal blog site and 
in the slimmest package possible. 

Go is a perfect language for static site building and minimalism.

## Create A Site

```shell
hugo new site blurg 
```

Pretty simple setup.

Config file only has three values...list them.

## Create A Theme

```shell
hugo new theme roost
```

Creates a theme that roosts in `./themes/roost`.

I got the basic structure to copy to the layouts directory.

## Tailwind CSS Setup

Credit [this blog post](https://praveenjuge.com/blog/install-tailwind-on-hugo/)

The key is in `/layouts/partials/head.html`...

```gotemplate
<head>
  <title>{{ .Title }}</title>

  {{ $styles := resources.Get "css/main.css" }}
  {{ $styles = $styles | resources.PostCSS (dict "inlineImports" true) }}

  {{ if hugo.IsProduction }}
  {{ $styles = $styles | minify }}
  {{ end }}

  <link href="{{ $styles.Permalink }}" rel="stylesheet" />
</head>
```

## Create Your First Post

```shell
hugo new posts/my-new-shizz.md
```

Now you need to figure out how to go to the URL. `http://localhost:1313/posts/my-new-shizz` 
would seem like the best place to try, but that doesn't work with default configureation.
