FactoryBot.define do
  factory :message do
    conversation { nil }
    author { nil }
    content { "MyText" }
  end
end
