class Conversation < ApplicationRecord
  enum :conversation_type, { private: 0, group: 1 }, prefix: :conversation
  enum :status, { active: 0, blocked: 1, archived: 2 }, prefix: :conversation

  has_many :conversation_participants, dependent: :destroy
  has_many :users, through: :conversation_participants
  has_many :messages, dependent: :destroy

  # this render a string with the content of the last message, if there is no messages it render a string saying that there is no messages yet
  def last_message
    messages.order(created_at: :desc).first.content || "Ainda não tem mensagens"
  end
end
