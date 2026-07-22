class Conversation::Component < ViewComponent::Base
  with_collection_parameter :conversation

  def initialize(conversation:)
    @conversation = conversation
  end
end
