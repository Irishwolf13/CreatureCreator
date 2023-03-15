class CreateCreatureInstances < ActiveRecord::Migration[7.0]
  def change
    create_table :creature_instances do |t|
      t.integer :game_creature_id
      t.integer :creature_template_id
      t.integer :user_id
      t.integer :level
      t.integer :hit_points
      t.integer :armor
      t.integer :attack
      t.integer :magic
      t.integer :movement
      t.string :bio

      t.timestamps
    end
  end
end
