class ArmorTemplate < ApplicationRecord
  belongs_to :creature_armor
  has_many :armor_augments
  has_many :augment_templates, through: :armor_augments
end
