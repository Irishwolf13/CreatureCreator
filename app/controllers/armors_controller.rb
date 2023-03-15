class ArmorsController < ApplicationController
  def index
    render json: Armor.all(), status: :ok
  end
end
