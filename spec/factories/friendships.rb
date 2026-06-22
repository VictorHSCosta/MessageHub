FactoryBot.define do
  factory :friendship do
    requester { nil }
    addressee { nil }
    status { 1 }
  end
end
