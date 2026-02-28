FactoryBot.define do
  factory :conversation do
    title { "Chat geral" }
    conversation_type { :private_chat }
  end
end
