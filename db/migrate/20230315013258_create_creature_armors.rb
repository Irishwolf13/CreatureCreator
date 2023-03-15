class CreateCreatureArmors < ActiveRecord::Migration[7.0]
  def change
    create_table :creature_armors do |t|
      t.integer :creature_instance_id
      t.integer :armor_template_id

      t.timestamps
    end
  end
end
