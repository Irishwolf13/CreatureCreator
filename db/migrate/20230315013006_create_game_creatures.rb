class CreateGameCreatures < ActiveRecord::Migration[7.0]
  def change
    create_table :game_creatures do |t|
      t.integer :game_id
      t.integer :creature_instance_id

      t.timestamps
    end
  end
end
