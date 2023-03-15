class CreatureInstance < ApplicationRecord
  belongs_to :user
  has_one :creature_template
  has_many :creature_armors
  has_many :armor_templates, through: :creature_armors
  has_many :creature_weapons
  has_many :weapon_templates, through: :creature_weapons
  has_many :game_creatures
  has_many :game_instances, through: :game_creatures
end
