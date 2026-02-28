FactoryBot.define do
  factory :friendship do
    friend { association :user }
    user { association :user }
    status { :pending }
  end
end
