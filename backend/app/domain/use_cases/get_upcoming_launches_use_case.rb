class GetUpcomingLaunchUseCase
  include Inject["launches_repository"]

  def execute
    launches_repository.upcoming.sort_by(&:date)
  end
end
