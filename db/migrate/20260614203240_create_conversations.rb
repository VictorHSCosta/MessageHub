class CreateConversations < ActiveRecord::Migration[8.1]
  def change
    create_table :conversations do |t|
      t.integer :type, null: false
      t.string :name
      t.integer :status, null: false, default: 0

      t.timestamps null: false
    end
  end
end
