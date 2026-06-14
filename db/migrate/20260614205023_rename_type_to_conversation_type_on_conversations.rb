class RenameTypeToConversationTypeOnConversations < ActiveRecord::Migration[8.1]
  def change
    rename_column :conversations, :type, :conversation_type
  end
end
