module Input
  class Component < ViewComponent::Base
    def initialize(name: nil)
      @name = name
    end
  end
end
