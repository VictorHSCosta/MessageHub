class Toast::Preview < Lookbook::Preview
  def default
    render(Toast::Component.new(message: "Password must include at least 8 characters"))
  end
end
