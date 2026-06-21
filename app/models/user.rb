class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :password, format: { with: /[A-Z]/, message: "must include at least one uppercase letter" }, if: -> { password.present? }
  validates :password, format: { with: /[a-z]/, message: "must include at least one lowercase letter" }, if: -> { password.present? }
  validates :password, format: { with: /\d/, message: "must include at least one number" }, if: -> { password.present? }
  validates :username, presence: true, uniqueness: true

  has_one_attached :avatar
  has_one :user_setting, dependent: :destroy
  has_many :conversation_participants, dependent: :destroy
  has_many :conversations, through: :conversation_participants
  has_many :messages, foreign_key: :author_id, dependent: :destroy, inverse_of: :author
  has_many :requested_friendships, class_name: "Friendship", foreign_key: :requester_id, dependent: :destroy, inverse_of: :requester
  has_many :received_friendships, class_name: "Friendship", foreign_key: :addressee_id, dependent: :destroy, inverse_of: :addressee
end
