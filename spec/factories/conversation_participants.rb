FactoryBot.define do
  factory :conversation_participant do
    conversation
    user
  end
end
