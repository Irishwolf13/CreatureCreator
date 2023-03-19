class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :monster_name, :level, :hit_points, :armor, :attack, :magic, :movement, :bio, :look
end
