class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :password, format: { with: /[A-Z]/, message: "must include at least one uppercase letter" }, if: -> { password.present? }
  validates :password, format: { with: /[a-z]/, message: "must include at least one lowercase letter" }, if: -> { password.present? }
  validates :password, format: { with: /\d/, message: "must include at least one number" }, if: -> { password.present? }
end
