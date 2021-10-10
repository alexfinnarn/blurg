---
title: "Bye World"
date: 2021-10-10T11:40:36-05:00
draft: false
image: 
---

I woke up today, brewed my coffee, and opened my email just like any morning. Except on this 
particular morning, one email caught my eye: "This Week in Rails has invited you to subscribe to 
their HEY World newsletter".

I've been following Rails 7 development for awhile and the new hotness that is Hotwire. Heck, the 
last blog post I wrote was about installing Stimulus and in future posts I want to explore Turbo in all 
it's glory. But to do both of these things, I definitely need to be building a blog since 
implementing both Stimulus and turbo requires digging into code. 

I've been at web development for 8 years or so, and I know that my experience can make me blind 
to what a newbie goes through with setting up a blog in 2021; a blog that they control, I should 
add as many services like medium.com make it really easy to put words on a screen.

In this post, I'll walk you through my initial impressions on "emailing the internet" and why I 
think it leads down a path of monotonous content and the same stuff you see everywhere on the 
web. You can follow along by reading through https://www.hey.com/world/.

As a disclaimer this is my first impression of their service. I have not tested it out, but I 
felt compelled to write this post since I hoped HEY would go the complete opposite direction 
taking us back to the glorious days that gave birth to "web publishing".

## Blogging Is As Easy As Emailing

The premise of "HEY World" is that you can email `world@hey.com` and be included in a newsletter. 
They claim that setting up a blog is really hard, and it cost lots of money...lies...as I sit here 
hosting free content for years.

> The glow is how you know you’re writing to the world.

Except when you send the email, notice typos, and then want to edit it before anyone important 
might read it. I'm sure I'm not the only one who has cringed after sending an email with typos 
or misspelled names. Granted, HEY probably has spellchecking and fancy features, but you can't 
guarantee that for all email clients. You can, of course, update content on your own blog at any 
time you want. And if you grow, well then, you could add tracking, A/B tests, all kinds of fun 
web stuff to help everyone get better.

## Your own HEY World URL

This seems like a good feature, but with all the high-profile DNS issues lately, how do we know 
our words will always be up for the world to read. If we own our content and build the sites 
ourselves we could self-host on GitHub, Netlify, and other static site hosts. We can even host 
off of our own computers just like the old days. How fund would that be to learn?!

## Can I post if I don’t use HEY?

Nope. So "setting up a blog and email newsletter is still way too hard" but they want you to 
sign up to their email service in order to fix that problem. How is this different from signing 
up for medium.com, which is free to test out? 

## Let's Try HEY...Here Comes The Bouncer/Screener

If you sign up for a HEY account, you end up going through a complicated wizard before you can 
explore anything. I suppose this is the "Apple approach", but I'm much more of a Linux guy where 
I just want the application to show up with some helpful docs.

The "Screener" feature rubs me the wrong way as an exclusionary measure that helps to increase 
bubbles by making it very easy to ignore strangers. Spam filters have worked fine for decades...
so please email my alex.finnarn@gmail.com address if you want, and I can decide myself whether I 
want to engage in your communication.

"Imbox"? Really? I can't even...must stop reviewing HEY since I can't help but be snarky

## Okay, Enough Snark Already!

So why am I being such a dick to someone trying to do good on the web with their new service? 
Shouldn't I just leave it alone and go my own way? Have I not heard the gospel of Thumper from 
Bambi?

I would leave this alone if it were done by anyone other than a man who cries foul at people not 
using web standards and who are supposedly making building websites more complicated then they 
need be. Via the Hotwire project, I got excited to go back to a simpler web, and the HEY email 
service and this new blogging feature seems to go the exact opposite way.

## Dreamweaver Daze

Remember Dreamweaver? I don't. It's not that I'm throwing shade at the tool or era of the web, 
it's to say that it came before my time. I got on the web more into the Facebook era once 
everything on the web became centralized. You know, good ole web 2.0 as they called it.

Web 1.0 is more what I'm interested in, and I hope web 3.0/4.0 or whatever next version we're 
going to harkens back to the time when ordinary people could wistfully publish "missives" on the 
web and express themselves.

The web is more than just text and hyperlinks: the base of any blog post. Just like what we saw 
back in the Dreamweaver days, the web is personal...or at least it can be. Your website can reflect 
you in all your glory. You want a `<blink>` tag, go for it. You want to scroll something around 
the screen, please do. Does that HTML work for a screen reader? Well, maybe not, but we can work 
together on that part.

A centralized service cannot represent you. If you want to put something in the sidebar of 
medium.com...well, you can't. I guess you could try to make each reader install some browser 
extension to...yeah, that's crazy and impractical. You have to build yourself on the web. No one else 
can do that for you.

## The Modern Web Is Fun

Oh, and what fun you'll have with "Web 7.0". CSS grid allows you to make cool layouts just like 
you see in print and rearrange them for different screens. Stimulus and Turbo allow you to add 
interaction to your blog without needing a build system or React. Blogging platforms like Hugo 
allow you to quickly write content, and you don't even have to know the Go programming language. 

All you need to do is remember some simple commands.

```bash
# Create markdown file.
hugo new yargh/bye-world.md

# Write post using simple markdown.
open -e content/yargh/bye-world.md

# Build and deploy post.
hugo && git push origin main
```

Rebuilding my website in the past few weeks has given me the most joy I've felt doing web 
development in many years. I finally feel like I'm expressing myself after years of being locked 
in blogging straight jackets that were bland and boring.

Writing blog posts on medium.com made me sad. Depending on the post, you might have not 
been able to read it. Hosting content costs money so I can't fault that method of publishing, 
and that's why HEY isn't democratizing blogging or anything like I originally thought. It's just 
another way to post simple content in a simple format.

## My Final Beef

I guess my main beef with the email I got this morning is hoping the people who were pushing the 
web forward would try to push content creators forward by making it easier to use static site 
generators, Stimulus, and Turbo. 

That's part of my goal when I write blog posts. I don't think what I'm doing is hard, it's only 
a few commands like I wrote. If I picked a Hugo Theme, then I wouldn't even have to worry about 
theming, HTML, and CSS...but it's too fun in building your own theme that I suggest all Hugo 
users start out with a custom theme.

Let's bring back flavor and personality to the web, but we can't do it with centralized blogging 
services. So I have to say in true Beatles fashion: You say "HEY World", and I say "BYE World".
