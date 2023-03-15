class CreateJoinWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table :join_weapons do |t|
      t.integer :monster_id
      t.integer :weapon_id

      t.timestamps
    end
  end
end
