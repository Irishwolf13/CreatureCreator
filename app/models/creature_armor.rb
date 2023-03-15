class CreatureArmor < ApplicationRecord
  belongs_to :creature_instance
  belongs_to :armor_template
end
