class CreateAugmentTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :augment_templates do |t|
      t.string :type
      t.string :modifier

      t.timestamps
    end
  end
end
