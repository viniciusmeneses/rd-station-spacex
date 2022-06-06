require "dry-auto_inject"
require "dry-container"

class Container
  extend Dry::Container::Mixin

  register("spacex_api") { SpaceXApi }

  register("launches_repository") { LaunchesRepository.new }

  register("get_last_launch_use_case") { GetLastLaunchUseCase.new }
  register("get_next_launch_use_case") { GetNextLaunchUseCase.new }
  register("get_previous_launches_use_case") { GetPreviousLaunchUseCase.new }
  register("get_upcoming_launches_use_case") { GetUpcomingLaunchUseCase.new }
end

Inject = Dry::AutoInject(Container)
