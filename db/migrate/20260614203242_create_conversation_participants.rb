class CreateConversationParticipants < ActiveRecord::Migration[8.1]
  def change
    create_table :conversation_participants do |t|
      t.references :conversation, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :role, null: false, default: 0
      t.datetime :joined_at, null: false

      t.timestamps null: false
    end

    add_index :conversation_participants, [ :conversation_id, :user_id ], unique: true
  end
end
