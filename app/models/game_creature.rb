class GameCreature < ApplicationRecord
  belongs_to :game_instance
  belongs_to :creature_instance
end
