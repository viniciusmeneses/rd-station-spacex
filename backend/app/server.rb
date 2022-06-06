require "sinatra"
require "sinatra/namespace"
require "sinatra/json"
require "sinatra/cross_origin"

require "sinatra/reloader" if development?

require_relative "container"
require_relative "requires"

configure do
  enable :cross_origin
end
