FactoryBot.define do
  factory :user_setting do
    user { nil }
    notifications { false }
  end
end
