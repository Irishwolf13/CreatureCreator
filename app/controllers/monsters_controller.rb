class MonstersController < ApplicationController
  def index
    render json: Monster.all(), status: :ok
  end
end
