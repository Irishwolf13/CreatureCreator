class User < ApplicationRecord
  has_many :monsters
  has_many :games
  has_secure_password
end
