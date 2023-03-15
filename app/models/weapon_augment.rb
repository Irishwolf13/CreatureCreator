class WeaponAugment < ApplicationRecord
  belongs_to :weapon_template
  belongs_to :augment_template
end
