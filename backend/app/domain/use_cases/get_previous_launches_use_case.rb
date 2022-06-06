class GetPreviousLaunchUseCase
  include Inject["launches_repository"]

  def execute
    launches_repository.previous
  end
end
