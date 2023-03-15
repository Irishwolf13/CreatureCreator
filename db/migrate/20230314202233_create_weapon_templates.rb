class CreateWeaponTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :weapon_templates do |t|
      t.string :style
      t.integer :attack_rating
      t.integer :weight

      t.timestamps
    end
  end
end
