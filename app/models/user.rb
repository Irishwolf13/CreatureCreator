class User < ApplicationRecord
  has_many :creature_instances
  has_many :game_instances
end
