# require 'byebug'
class ApplicationController < ActionController::API
  # protect_from_forgery with: :exception
  # skip_before_action :verify_authenticity_token
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :authorize

  private
  def record_invalid error
    render json: {error: error.message}, status: 422
  end

  def current_user
    user = User.find_by(id: session[:user_id])
    user
  end

  def authorize
    frank = User.find_by(id: session[:user_id])
    # byebug
    render json: {errors: "#{frank}"}, status: :unauthorized unless frank
  end

  private

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end

 def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
end
