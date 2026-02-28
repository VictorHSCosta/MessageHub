class Conversation < ApplicationRecord
    has_many :conversation_participants, dependent: :destroy
    has_many :users, through: :conversation_participants
    has_many :messages, dependent: :destroy

    enum :conversation_type, { private_chat: 0, group_chat: 1 }
end
