---
sidebar_position: 4
slug: /user-guides/trends
---

# Trends

`Trend` analysis also know as `event segmentation` analysis lets you visualize events to undertand trends in user behaviour over time.

Eg: **What is website visit trend on my landing page**

Follow below steps to find trend in your data :

## Select event

Select the event that user performed eg: `Pagview`or `Added to Cart` etc

![Fusion](/img/user-guides/trends/trends-1.png "Fusion")

## Select aggregation

Select an aggrgation type

1. `Total`: If single user perfoms event multiple times it will count all
2. `Unique`: will only count any event as one for each unique user even if they do it multiple times.

![Fusion](/img/user-guides/trends/trends-2.png "Fusion")

## Add filter

Use event property based filter on events

eg: Show `Pageviews` events where `page` `is equal` `/pricing`

![Fusion](/img/user-guides/trends/trends-3.png "Fusion")
![Fusion](/img/user-guides/trends/trends-4.png "Fusion")

## Breakdown by properties

Select property to breakdown the data.

eg: Show `Log in button cliked` events broken down by `OS`

:::tip
When using `breakdown` feature, you will have to change graph type from `Line` to other available options like `Bar`
:::

![Fusion](/img/user-guides/trends/trends-5.png "Fusion")

## Save the graph

You can save graphs you create into dashboards. Refer [Dashboard](/user-guides/dashboard) for detailed explaination
