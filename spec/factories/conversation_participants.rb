FactoryBot.define do
  factory :conversation_participant do
    conversation { nil }
    user { nil }
    role { 1 }
    joined_at { "2026-06-14 17:32:42" }
  end
end
