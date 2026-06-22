class Conversation < ApplicationRecord
  enum :conversation_type, { private: 0, group: 1 }, prefix: :conversation
  enum :status, { active: 0, blocked: 1, archived: 2 }, prefix: :conversation

  has_many :conversation_participants, dependent: :destroy
  has_many :users, through: :conversation_participants
  has_many :messages, dependent: :destroy
end
