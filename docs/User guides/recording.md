---
sidebar_position: 7
slug: /user-guides/recording
---

# Recording

Session recording records user screen without capturing sesitive infomation like password & content they are seeing and lets you understand exactly how users interact with your product what & what they see in a privacy friendly manner.

:::caution
By default session recording is disabled you need to enable it while adding tracking snippet and also enable it on dashboard setting page.
:::

## Enable session recording

### 1. Enable in snippet

Change session recording flag to `true`. You can find it in the end of this line`fusion.init("608813b5254914007109279a", "https://service.fusionhq.co", false, false);` in tracking snippet.

Note: The first `false` if for autocapture & the second one for session recording.

### 2. Enable on dashboard

Change the session recording switch to enable recording.

![Fusion](/img/user-guides/settings/settings-3.png "Fusion")

## Filter session recordings by user properties

Just like users and events you can apply property based filter to user recordings

![Fusion](/img/user-guides/recording/recording-1.png "Fusion")

## Properties of recording

You can click `+` button to expand and see user properties of session recording to find more info about that recording & user

![Fusion](/img/user-guides/recording/recording-2.png "Fusion")

## Session replay

Finally click to a recording to see it. You can pause/play and change the replay speed. The user cursor movement and guidelines help you understand user behaviour and find potential UI friction points & bugs

![Fusion](/img/user-guides/recording/recording-3.png "Fusion")
