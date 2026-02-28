FactoryBot.define do
  factory :message do
    content { "Olá, tudo bem?" }
    message_type { :text }
    conversation
    user
  end
end
