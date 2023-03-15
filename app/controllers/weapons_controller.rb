class WeaponsController < ApplicationController
  def index
    render json: Weapon.all(), status: :ok
  end
end
