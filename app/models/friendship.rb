class Friendship < ApplicationRecord
  enum :status, { pending: 0, accepted: 1, blocked: 2 }, prefix: :friendship

  belongs_to :requester, class_name: "User"
  belongs_to :addressee, class_name: "User"
end
