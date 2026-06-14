class Input::Preview < Lookbook::Preview
  def default
    render(Input::Component.new(placeholder: "Enter your text here", value: nil, type: "password"))
  end
end
