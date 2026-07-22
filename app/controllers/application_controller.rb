class ApplicationController < ActionController::Base
  before_action :set_conversations, if: :user_signed_in?
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  private

  def set_conversations
    @conversations = current_user.conversations.includes(:messages).order(updated_at: :desc)
  end
end
