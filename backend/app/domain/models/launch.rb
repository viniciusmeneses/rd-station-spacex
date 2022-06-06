Launch = Struct.new(
  :id,
  :name,
  :details,
  :flight_number,
  :date,
  :success,
  :image_url,
  keyword_init: true
) do
  def to_json(*)
    to_h.update(date: date&.iso8601).to_json
  end
end
