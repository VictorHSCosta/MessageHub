require 'rails_helper'

RSpec.describe Conversation, type: :model do
  describe 'associations' do
    it { should have_many(:conversation_participants) }
    it { should have_many(:users).through(:conversation_participants) }
    it { should have_many(:messages) }
  end

  describe 'enums' do
    it { should define_enum_for(:conversation_type).with_values(private_chat: 0, group_chat: 1) }
  end
end
