# Create admin user
User.create!(email: "admin@example.com", password: "password", role: :admin)

10.times do |i|
  User.create!(email: "user0_#{i + 1}@example.com", password: "password", role: :user)
end
