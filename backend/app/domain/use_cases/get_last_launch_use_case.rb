class GetLastLaunchUseCase
  include Inject["launches_repository"]

  def execute
    launches_repository.last
  end
end
