class LooksController < ApplicationController
  def index
    render json: Look.all(), status: :ok
  end
end
