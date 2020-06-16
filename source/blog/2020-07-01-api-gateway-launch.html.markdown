---
title: EA Team launches API Gateway
author: Architecture Team
date: 2020-07-01
category: "product launch"
published: false
image: /images/blogs/2020-06-17-aws-api-gateway.png
image_alt: Diagram Amazon Web Services API Gateway
---

Today the team launched the API Gateway.

The API Gateway makes it easy for developers to create, publish, maintain, monitor and secure APIs at any scale. API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, CORS support, authorisation and access control, throttling, monitoring, and API version management.

We have chosen the [AWS API Gateway](https://aws.amazon.com/api-gateway) as our API management platform for the next two years.

An API Gateway makes it easier for client side applications that need to access multiple individual services.  Instead, a client can send a single request to the API gateway, which will itself call the services. This primary function of the API gateway is known as routing, but there are plenty more reasons to use an API gateway.

#### Security benefits

Since the API gateway sits between front end applications and the back end services it will act as a security barrier making sure your sensitive API Endpoints are not exposed. It also protects your API from malicious attack vectors such as DoS attacks, SQL injections, and other  similar attacks.

- Authentication. The API gateway is configured to authenticate API calls. This way, even if the client needs to access data from multiple services, they only need to authenticate once at the gateway. This reduces latency and ensures authentication processes are consistent across the application.
- Input Validation. API gateways can also be used to perform simple logic. In the case of input validation, this means ensuring that the client’s request contains all the necessary information to complete the request — in the correct format — before it reaches the service which will ultimately retrieve the requested data.  

#### Measurement and monitoring

- Metrics Collection. Since all requests are funneled through the API gateway, it’s the ideal place to collect analytics. An API gateway can, for example, measure how many requests a user is making or how many requests are being relayed to a particular microservices. This also allows API gateways to be used for rate limiting: if a user is sending too many requests, the gateway can reject them instead of passing them on to one of the services.

#### Better support for end users

- Response Transformation. Often, different devices and users need access to different information. For example, mobile devices might need less data than desktop devices, while internal clients might need more information than external clients. An API gateway can be used to account for this, effectively presenting a unique API to each client type. This is something Netflix does with its API gateway.

### More information

- [API Gateway Product Page](https://github.com/dof-dss)

A Developer Portal has been produced to allow developers onboard back end services onto the API Gateway, or to enable a front end application to consume APIs.  

- [API Developer Portal Page](https://github.com/dof-dss/dss-api-developer-portal)
