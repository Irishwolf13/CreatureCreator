class CreateWeaponAugments < ActiveRecord::Migration[7.0]
  def change
    create_table :weapon_augments do |t|
      t.integer :weapon_id
      t.integer :augment_id

      t.timestamps
    end
  end
end
