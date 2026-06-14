class ConversationParticipant < ApplicationRecord
  enum :role, { member: 0, admin: 1, owner: 2 }, prefix: :participant

  belongs_to :conversation
  belongs_to :user
end
