class Monster < ApplicationRecord
  belongs_to :user
  belongs_to :look
  belongs_to :armor
  belongs_to :weapon
  has_many :join_games
end
