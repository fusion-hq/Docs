---
sidebar_position: 3
slug: /data-ingestion/Javascript
---

# Javascript

Explains the working of fusion-js library

### Web App VS Website

The tracking snippet based auto-capture approach is good for static website where for every page navigation full page refresh happens. This allows fusion-js to send `Pageview` event on every page visits. While Web apps are only completed loaded once for the first time visit and all the pages are rendered without full page refresh hence you only see `Pageview` event for first website load. For this situation you need to access fusion-js library's helper function to manually send events.

### Why library is needed

Apart from above situation, In many cases you also need to send some data with event eg: with `login` event, the `plan` (trial or paid) of user who is logging in.
This can not be done with autocapture hence Javascript library is needed.

## Installation

### Install using fusion-js snippet

Load the tracking script into HTML using the snippet method just like in previous section. The tracking snippet can be found below just copy paste it inside `<head>` tags just above the closing `</head>` tags of your root html page.
your snippet will look like this :

```html
<!-- Fusion Analytics Tracking Script-->
<script src="https://app.fusionhq.co/session-lib.js"></script>
<script>
  (function () {
    var fusionScript = document.createElement("SCRIPT");
    fusionScript.src = "https://app.fusionhq.co/array.js";
    fusionScript.type = "text/javascript";
    document.getElementsByTagName("HEAD")[0].appendChild(fusionScript);
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        fusion.init(
          "608813b5254914007109279a",
          "https://service.fusionhq.co",
          false,
          false
        );
      }
    };
  })();
</script>
```

or

### Install from NPM using

```shell
npm install --save fusion-analytics-js
```

then include import & initialize and use the NPM package do not forget to pass your own write key in both methods. You can find your write key from settings page.

```js
import Fusion from "fusion-analytics-js";
fusion.init(
  "608813b5254914007109279a",
  "https://service.fusionhq.co",
  false,
  false
);
```

## How to use fusion.js library

### Send event

```js
//Manually send pageview event
fusion.track("Pageview");
```

### Send event with custom properties

```js
//Manually send pageview event
fusion.track("Login", { plan: "trial" });
```

### Register super-properties

```js
//Resgiter ice_cream property and value
fusion.register({ ice_cream: "vanilla-chocolate" });
```

### Unregister super-properties

```js
//Unresgiter ice_cream property
fusion.unregister("ice_cream");
```
