class GetNextLaunchUseCase
  include Inject["launches_repository"]

  def execute
    launches_repository.next
  end
end
