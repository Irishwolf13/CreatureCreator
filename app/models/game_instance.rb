class GameInstance < ApplicationRecord
  belongs_to :user
  has_many :game_creatures
  has_many :creature_instances, through: :game_craetures
end
