class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  before_action :authenticate_user!

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  inertia_share current_user: -> { serializer(current_user, UserSerializer) }

  # serializer helper method using Panko
  def serializer(resource, serializer_class)
    return nil unless resource

    if resource.is_a?(Array) || resource.is_a?(ActiveRecord::Relation)
      JSON.parse(Panko::ArraySerializer.new(resource, each_serializer: serializer_class).to_json)
    else
      JSON.parse(serializer_class.new.serialize_to_json(resource))
    end
  end
end
