---
sidebar_position: 2
slug: /data-ingestion/snippet-installation
---

# Snippet Installation

Javascript tracking snippet allows you to send data from websites with minimal to no coding

:::tip Note
Snippet installation way of tracking is well suited for static websites not for web apps please checkout next section [Javascript](/data-ingestion/javascript) for this
:::

### Select database

Go to **Settings** page on dashboard

Click on "Provision Tables" button to populate database provided by Fusion. This step will allow you to select your own storage database if you want to save analytcs data to your own storage system.

![Fusion](/img/user-guides/settings/settings-1.png "Fusion")

### Add tracking snippet on your website

The tracking snippet can be found below just copy paste it inside `<head>` tags just above the closing `</head>` tags of your root html page.

![Fusion](/img/user-guides/settings/settings-2.png "Fusion")

### Autherize your website domain

Below the tracking snippet you need to add the domain name of your website. This allows only your website to send events to your Fusion account with above tracking snippet. Other websites can not send data even with copying the tracking snippet

:::tip Note
Do not add http or http just add domain name eg: **google.com** not **https://google.com**
:::

You can use same tracking snippet to multiple website just add the domain name to autherized URL. Eg: `blog.fusionhq.co` & `docs.fusionhq.co` are two different website

![Fusion](/img/user-guides/settings/settings-3.png "Fusion")

### No-code way to send events

:::tip Note
We recommend to use no-code auto-capture for landing pages or when you are evaluating Fusion. for longer run and interacting web apps, use fusions helper methods to manually send events
:::

Fusion also support auto-capture mode.
In the tracking snippet line `fusion.init("608813b5254914007109279a", "https://service.fusionhq.co", false, false);` If you change first "false" to "true" will allow to automatically send event when user interacts with your website.

By default Fusion automatically tracks interactions like elements like button click, link click, page visits, page leaves, input select, input filled, form submission.

### Ignoring elements in autocapturing

Fusion captures every element on website if you don't want to track a particular element just add css class `fusion-no-capture` to that element. Tracking script will not track that element

eg:

```html
<button class="fusion-no-capture">Login</button>
```
