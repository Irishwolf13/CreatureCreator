class CreateCreatureWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table :creature_weapons do |t|
      t.integer :creature_instance_id
      t.integer :weapon_template_id

      t.timestamps
    end
  end
end
