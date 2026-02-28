class Message < ApplicationRecord
    belongs_to :conversation
    belongs_to :user

    enum :message_type, { text: 0, image: 1, video: 2, file: 3 }
end
