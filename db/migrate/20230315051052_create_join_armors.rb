class CreateJoinArmors < ActiveRecord::Migration[7.0]
  def change
    create_table :join_armors do |t|
      t.integer :monster_id
      t.integer :armor_id

      t.timestamps
    end
  end
end
