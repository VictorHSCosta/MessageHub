# frozen_string_literal: true

module Toast
  class Component < ViewComponent::Base
    def initialize(message: nil, type: "default")
      @message = message
      @type = type
      @color = color(type)
    end

    private

    def color(type)
      case type
      when "success"
        "bg-green-500"
      when "error"
        "bg-red-500"
      when "warning"
        "bg-yellow-500"
      else
        "bg-green-500"
      end
    end
  end
end
