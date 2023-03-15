class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :level, :hit_points, :armor, :attack, :magic, :movement, :bio
end
