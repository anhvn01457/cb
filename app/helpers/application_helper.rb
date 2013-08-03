module ApplicationHelper

	# Returns the full title on a per-page basis.
  def full_title page_title = nil
    base_title = "Cầu biển Huy Mạnh"
    if page_title.blank?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  def full_description page_description = nil
    base_description = "Cầu biển Huy Mạnh"
    if page_description.blank?
      base_description
    else
      "#{base_description} | #{page_description}"
    end
  end

end
