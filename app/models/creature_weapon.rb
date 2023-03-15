class CreatureWeapon < ApplicationRecord
  belongs_to :creature_instance
  belongs_to :weapon_template
end
