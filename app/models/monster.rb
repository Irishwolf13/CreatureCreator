class Monster < ApplicationRecord
  belongs_to :user
  has_many :join_games
  has_many :looks
  has_many :armors
  has_many :weapons
end
