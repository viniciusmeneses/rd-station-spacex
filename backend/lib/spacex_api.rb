require "httparty"

module SpaceXApi
  include HTTParty
  base_uri "https://api.spacexdata.com/v5"
end
