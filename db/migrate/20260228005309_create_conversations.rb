class CreateConversations < ActiveRecord::Migration[8.1]
  def change
    create_table :conversations do |t|
      t.string :title
      t.integer :conversation_type, null: false, default: 0

      t.timestamps
    end
  end
end
