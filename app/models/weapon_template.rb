class WeaponTemplate < ApplicationRecord
  belongs_to :creature_weapon
  has_many :weapon_augments
  has_many :augment_templates, through: :weapon_augments
end
