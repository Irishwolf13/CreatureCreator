class CreateCreatures < ActiveRecord::Migration[7.0]
  def change
    create_table :creatures do |t|
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
