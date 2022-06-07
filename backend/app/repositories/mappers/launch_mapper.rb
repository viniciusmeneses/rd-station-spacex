class LaunchMapper
  def self.from_json(json)
    Launch.new(
      id: json["id"],
      name: json["name"],
      details: json["details"],
      flight_number: json["flight_number"],
      date: json["date_utc"] ? Time.iso8601(json["date_utc"]) : nil,
      success: json["success"],
      image_url: json["links"]&.dig("patch", "small")
    )
  end
end
