# Live data visualization with highcharts.js

This project is a simple example for a web-based dashboard to visualize spatial and statistical data. It uses  as Framework and [Highcharts](https://www.highcharts.com/) to produce interactive and dynamic charts and maps. The data is pushed to the dashboard from an [Apache Kafka](https://kafka.apache.org/) topic via websocket.

I used this approach to visualize processing results from my project: **[spatio-temporal-autocorrelation-with-apache-flink](https://github.com/thlemm/spatio-temporal-autocorrelation-with-apache-flink)**


## Features

This dashboard comprises three charts:
* histogram with additional vertical line for an indicator value
* scatter plot with linear regression line
* map visualization of spatial data

The data is pushed to the charts via a websocket. In this example the websocket is configured to subscribe to a kafka topic.

## Preview
Here you can see the dashboard visualizing the analysis results for a spatio-temporal autocorrelation index.

![Dashboard overview](/assets/dashboard-overview.png)
