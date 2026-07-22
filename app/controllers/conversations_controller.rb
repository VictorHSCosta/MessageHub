class ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_conversation, only: :show

  def index
    @conversations = current_user.conversations.includes(:conversation_participants, :messages).order(updated_at: :desc)
  end

  def show
  end

  private

  def set_conversation
    @conversation = current_user.conversations.includes(:conversation_participants, :messages).find(params[:id])
  end
end
