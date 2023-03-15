class AddImageArmor < ActiveRecord::Migration[7.0]
  def change
    add_column :armor_templates, :image, :string
    add_column :weapon_templates, :image, :string
  end
end
