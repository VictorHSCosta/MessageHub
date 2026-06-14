# frozen_string_literal: true

random = Random.new(20_260_614)
now = Time.current
Faker::Config.random = random

Message.delete_all
ConversationParticipant.delete_all
Conversation.delete_all
Friendship.delete_all
UserSetting.delete_all
User.delete_all

users = 50.times.map do |index|
  number = index + 1
  full_name = Faker::Name.name
  username_base = Faker::Internet.unique.username(specifier: full_name, separators: ["_"]).parameterize(separator: "_")
  username = "user_#{number.to_s.rjust(2, "0")}_#{username_base}"

  User.create!(
    username: username,
    email: "#{username}@messagehub.test",
    password: "Password1!",
    password_confirmation: "Password1!",
    created_at: now - random.rand(10..180).days
  )
end

users.each do |user|
  UserSetting.create!(
    user: user,
    notifications: random.rand < 0.82,
    created_at: user.created_at + random.rand(1..12).hours,
    updated_at: now - random.rand(0..20).days
  )
end

friend_targets = users.to_h { |user| [user.id, random.rand(2..5)] }
friend_degrees = Hash.new(0)
accepted_edges = []
edge_keys = {}

10_000.times do
  break if users.all? { |user| friend_degrees[user.id] >= friend_targets[user.id] }

  requester, addressee = users.sample(2, random: random)
  next if friend_degrees[requester.id] >= friend_targets[requester.id]
  next if friend_degrees[addressee.id] >= friend_targets[addressee.id]

  key = [requester.id, addressee.id].sort
  next if edge_keys[key]

  edge_keys[key] = true
  accepted_edges << [requester, addressee].shuffle(random: random)
  friend_degrees[requester.id] += 1
  friend_degrees[addressee.id] += 1
end

accepted_edges.each do |requester, addressee|
  Friendship.create!(
    requester: requester,
    addressee: addressee,
    status: :accepted,
    created_at: now - random.rand(3..120).days
  )
end

relationship_keys = edge_keys.dup

pending_edges = []
blocked_edges = []

while pending_edges.size < 14
  requester, addressee = users.sample(2, random: random)
  key = [requester.id, addressee.id].sort
  next if relationship_keys[key]

  relationship_keys[key] = true
  pending_edges << [requester, addressee]
end

while blocked_edges.size < 8
  requester, addressee = users.sample(2, random: random)
  key = [requester.id, addressee.id].sort
  next if relationship_keys[key]

  relationship_keys[key] = true
  blocked_edges << [requester, addressee]
end

pending_edges.each do |requester, addressee|
  Friendship.create!(
    requester: requester,
    addressee: addressee,
    status: :pending,
    created_at: now - random.rand(1..25).days
  )
end

blocked_edges.each do |requester, addressee|
  Friendship.create!(
    requester: requester,
    addressee: addressee,
    status: :blocked,
    created_at: now - random.rand(8..80).days
  )
end

def create_message!(conversation, author, content, created_at)
  Message.create!(
    conversation: conversation,
    author: author,
    content: content,
    created_at: created_at,
    updated_at: created_at
  )
end

accepted_edges.sample(35, random: random).each do |user_a, user_b|
  started_at = now - random.rand(1..45).days
  conversation = Conversation.create!(
    conversation_type: :private,
    status: :active,
    created_at: started_at,
    updated_at: started_at + random.rand(1..24).hours
  )

  [user_a, user_b].each do |user|
    ConversationParticipant.create!(
      conversation: conversation,
      user: user,
      role: :member,
      joined_at: started_at,
      created_at: started_at,
      updated_at: started_at
    )
  end

  random.rand(3..7).times do |message_index|
    author = [user_a, user_b].sample(random: random)
    sent_at = started_at + message_index.hours + random.rand(1..45).minutes
    create_message!(conversation, author, Faker::Lorem.sentence(word_count: random.rand(4..10)), sent_at)
  end
end

group_specs = 12.times.map do
  suffix = Faker::Lorem.unique.word.titleize
  name = "#{Faker::Company.unique.name} #{suffix}"
  participant_count = random.rand(4..12)

  [name, participant_count]
end

group_specs.each_with_index do |(name, participant_count), index|
  started_at = now - random.rand(5..150).days
  status = index == 10 ? :archived : :active
  participants = users.sample(participant_count, random: random)
  owner = participants.first
  admins = participants.drop(1).sample(random.rand(1..2), random: random)

  conversation = Conversation.create!(
    conversation_type: :group,
    name: name,
    status: status,
    created_at: started_at,
    updated_at: now - random.rand(0..20).days
  )

  participants.each do |participant|
    role =
      if participant == owner
        :owner
      elsif admins.include?(participant)
        :admin
      else
        :member
      end

    joined_at = started_at + random.rand(0..8).days

    ConversationParticipant.create!(
      conversation: conversation,
      user: participant,
      role: role,
      joined_at: joined_at,
      created_at: joined_at,
      updated_at: joined_at
    )
  end

  random.rand(8..18).times do |message_index|
    author = participants.sample(random: random)
    sent_at = started_at + message_index.hours + random.rand(10..50).minutes
    create_message!(conversation, author, Faker::Lorem.sentence(word_count: random.rand(4..12)), sent_at)
  end
end

puts "Seed concluido:"
puts "- #{User.count} usuarios"
puts "- #{Friendship.where(status: :accepted).count} amizades aceitas"
puts "- #{Friendship.where(status: :pending).count} solicitacoes pendentes"
puts "- #{Friendship.where(status: :blocked).count} relacoes bloqueadas"
puts "- #{Conversation.where(conversation_type: :private).count} conversas privadas"
puts "- #{Conversation.where(conversation_type: :group).count} grupos"
puts "- #{Message.count} mensagens"
puts "- maximo de amigos aceitos por usuario: #{friend_degrees.values.max}"
