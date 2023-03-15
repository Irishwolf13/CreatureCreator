class CreateGameInstances < ActiveRecord::Migration[7.0]
  def change
    create_table :game_instances do |t|
      t.integer :user_id
      t.integer :difficulty

      t.timestamps
    end
  end
end
