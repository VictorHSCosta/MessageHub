require 'rails_helper'

RSpec.describe Message, type: :model do
  describe 'associations' do
    it { should belong_to(:conversation) }
    it { should belong_to(:user) }
  end

  describe 'enums' do
    it { should define_enum_for(:message_type).with_values(text: 0, image: 1, video: 2, file: 3) }
  end
end
