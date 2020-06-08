# Digital Shared Services Blog

This blog is built using [Middleman](https://middlemanapp.com/).

## Tech docs template

This project uses the [dof-dss/product-page-template](https://github.com/dof-dss/product-page-template)

## Frontend Dependencies

[GOV.UK Frontend] and [GaaP Analytics] are included using [NPM] and bundled in
on build. You can include more [NPM] modules easily by installing them as a
dependency and including paths to them. This works because within [config.rb](https://github.com/alphagov/product-page-example/blob/master/config.rb#L64) sprockets is instructed to look within
`node_modules/`.

### Getting started with Google Analytics
To get started with Google Analytics you will need an account and a tracking ID
you can get these by talking to the GaaP programme team. The analytics ID is then
set within [config.rb](https://github.com/alphagov/product-page-example/blob/master/config.rb#L34).

To learn about how to get started with event tracking head over to [GaaP Analytics].

## Running locally

If you wish to run the example in your own browser, you'll need to run the
following commands from the root of this project:

- `bundle install` to install middleman and its dependencies
- `npm install` to install the frontend dependencies
- `bundle exec middleman server` - to start middleman's built in server
- `open http://localhost:4567` - to open the example in your browser


[GOV.UK Pay]: https://www.payments.service.gov.uk/
[GOV.UK Notify]: https://www.notifications.service.gov.uk/
[GOV.UK Registers]: https://registers.cloudapps.digital/

[GOV.UK Frontend]: https://github.com/alphagov/govuk-frontend
[GaaP Analytics]: https://github.com/alphagov/gaap-analytics
[NPM]: https://npmjs.com

## Generating articles

To generate a new article:

`middleman article <article-name>`
