class SessionsController < ApplicationController
  # skip_before_action :authorized_user, only: [:create]
  def create
    user = User.find_by(username:params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {error: 'Sorry, you suck fool!'}, status: :unauthorized
    end
  end
end
