class GetPreviousLaunchUseCase
  include Inject["launches_repository"]

  def execute
    launches_repository.previous.sort_by(&:date).reverse
  end
end
