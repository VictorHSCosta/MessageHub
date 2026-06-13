module Input
  class Component < ViewComponent::Base
    def initialize(placeholder: nil, value: nil, type: "text")
      @placeholder = placeholder
      @value = value
      @initial_type = type
    end


    private
    def input_type
      @initial_type == "password" ? "password" : "text"
    end
  end
end
