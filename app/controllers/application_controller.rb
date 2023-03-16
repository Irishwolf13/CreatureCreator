class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :authorize

  private
  def record_invalid error
    render json: {error: error.message}, status: 422
  end

  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])

  #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  # end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
