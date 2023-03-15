class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :passowrd, :email
end
