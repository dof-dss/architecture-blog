---
title: EA Team launches audit and usage tracking services
author: Architecture Team
date: 2020-07-02
category: "product launch"
tags: service
image: /images/blogs/2020-07-02-usage-tracking-screenshot.png
image_alt: Screenshot of usage tracking service
---

### Get to your MVP faster and cheaper

Today the team launched the Audit and Usage Tracking services in **private beta**. These are custom services that have been built by us, that are hosted in [GOV.UK PaaS](https://www.cloud.service.gov.uk){:class="govuk-link"} and that are accessible via our secure [API Gateway](/blog/product-launch/api-gateway-launch){:class="govuk-link"}.

These common services allow you to focus on designing and developing code that generates real business value for your customers. It also means you can get to your MVP faster and with reduced costs for development and ongoing support.

These services are *open source* and we encourage you to provide suggestions and even contribute to the ongoing development of each service.

Technical information on each of these APIs can be found in our [API Developer Portal](https://developer-portal.digitalni.gov.uk){:class="govuk-link"}.

### Audit Service

The Audit Service provides developers with an API to store and retrieve application audit data. Audit data can be viewed with the audit viewer.

 - [Audit Service API](https://developer-portal.digitalni.gov.uk/AvailableAPIs/AuditService){:class="govuk-link"}
 - [Audit Service Viewer](https://audit.digitalni.gov.uk){:class="govuk-link"}
 - [Audit Service source code](https://github.com/dof-dss/ea-audit-auditservice){:class="govuk-link"}

### Usage Tracking Service

The Usage Tracking Service provides developers with an API to store and retrieve business events. A dotNet Core package can be installed from nuget makes using the service easy. Tracking data can be view with the usage tracking viewer.

- [Usage Tracking Service API](https://developer-portal.digitalni.gov.uk/AvailableAPIs/UsageTracking){:class="govuk-link"}
- [Usage Tracking Viewer](https://usage-tracking.digitalni.gov.uk){:class="govuk-link"}
- [Usage Tracking source code](https://github.com/dof-dss/EA.UsageTracking){:class="govuk-link"}
- [Sample Usage Tracking .Net Client](https://github.com/dof-dss/EA.UsageTracking.Client){:class="govuk-link"}
