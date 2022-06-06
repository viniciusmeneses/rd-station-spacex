namespace "/launches" do
  get "/last" do
    json Container.resolve("get_last_launch_use_case").execute
  end

  get "/next" do
    json Container.resolve("get_next_launch_use_case").execute
  end

  get "/previous" do
    json Container.resolve("get_previous_launches_use_case").execute
  end

  get "/upcoming" do
    json Container.resolve("get_upcoming_launches_use_case").execute
  end
end
