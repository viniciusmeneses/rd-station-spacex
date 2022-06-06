class GetUpcomingLaunchUseCase
  include Inject["launches_repository"]

  def execute
    launches_repository.upcoming
  end
end
