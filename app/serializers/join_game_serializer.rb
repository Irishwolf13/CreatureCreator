class JoinGameSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :creature_id
end
