class UsersController < ApplicationController
  def index
    render json: User.all(), status: :ok
  end

  def show
    user = User.find_by(id:session[:user_id])
    if user
      render json: user, status: :ok
    else
      render json:{errors:"Not Authorized"}, status: :unauthorized
    end
  end
  # def create
  #   newUser = User.create!(strong_params)
  #   session[:user_id] = newUser.id
  #   render json: newUser, status: :created
  # end
end
