class CreateArmorAugments < ActiveRecord::Migration[7.0]
  def change
    create_table :armor_augments do |t|
      t.integer :armor_id
      t.integer :augment_id

      t.timestamps
    end
  end
end
