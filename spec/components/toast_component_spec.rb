# frozen_string_literal: true

require "rails_helper"

RSpec.describe Toast::Component, type: :component do
  it "renders the message" do
    html = ApplicationController.render(described_class.new(message: "Password must include at least 8 characters"))

    expect(html).to include("Password must include at least 8 characters")
  end
end
