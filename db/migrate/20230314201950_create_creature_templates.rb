class CreateCreatureTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :creature_templates do |t|
      t.string :race
      t.string :image

      t.timestamps
    end
  end
end
