class CreateArmorTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :armor_templates do |t|
      t.string :material
      t.integer :defense_rating
      t.integer :weight
      t.integer :movement_reduction

      t.timestamps
    end
  end
end
