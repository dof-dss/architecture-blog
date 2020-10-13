###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Google analytics
# Analytics ID must be inside the single quotes as it’s string
configure :development do
  set :analytics, "'UA-150837477-4'"
#   set :analytics, "'UA-XXXXXXXX-X'"
end

# Insert your Google Analytics ID below
configure :build do
  set :analytics, "'UA-150837477-4'"
end



###
# Helpers
###
# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Hash assets on build
  activate :asset_hash
end

activate :sprockets do |config|
  config.expose_middleman_helpers = true
end

sprockets.append_path File.join(root, 'node_modules/govuk-frontend/')
sprockets.append_path File.join(root, 'node_modules/gaap-analytics/')

# https://middlemanapp.com/advanced/pretty-urls/
activate :directory_indexes

# activate blog extension
activate :blog do |blog|
  # set options on blog
  blog.prefix = "blog"
  blog.layout = "blog"
  blog.permalink = "{category}/{title}.html"
  blog.paginate = true
  blog.calendar_template = "calendar.html"
  blog.tag_template = "tag.html"
  blog.custom_collections = {
    category: {
      link: '/categories/{category}.html',
      template: '/category.html'
    }
  }
end

# Read in the list of links for the header from the YAML file
config[:settings] = YAML.load(File.read('config/settings.yml'))
