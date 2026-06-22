class CreateUserSettings < ActiveRecord::Migration[8.1]
  def up
    create_table :user_settings, id: false do |t|
      t.bigint :user_id, null: false
      t.boolean :notifications, null: false, default: true

      t.timestamps null: false
    end

    add_foreign_key :user_settings, :users
    execute "ALTER TABLE user_settings ADD PRIMARY KEY (user_id)"
  end

  def down
    drop_table :user_settings
  end
end
