# require 'byebug'

class SessionsController < ApplicationController
  # skip_before_action :authorize, only: :create
  def create
    user = User.find_by(username:params[:username])
    puts user
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      puts user, session[:user_id]
      render json: user, status: :ok
    else
      render json: {error: 'Sorry, you suck fool!'}, status: :unauthorized
    end
  end

  def destroy
    # removes user_id from sessions hash
    session.delete :user_id
    head :no_content
  end
end
