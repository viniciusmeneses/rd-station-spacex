class LaunchesRepository
  include Inject["spacex_api"]

  def last
    LaunchMapper.from_json(spacex_api.get("/launches/latest"))
    LaunchMapper.from_json(launch)
  end

  def next
    LaunchMapper.from_json(spacex_api.get("/launches/next"))
  end

  def previous
    spacex_api
      .get("/launches/past")
      .map { |launch| LaunchMapper.from_json(launch) }
  end

  def upcoming
    spacex_api
      .get("/launches/upcoming")
      .map { |launch| LaunchMapper.from_json(launch) }
  end
end
