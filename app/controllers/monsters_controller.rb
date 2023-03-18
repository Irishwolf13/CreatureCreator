class MonstersController < ApplicationController
  # rescue_from ActiveRecord::RecordNotFound, with: :monster_not_found

  def index
    render json: Monster.all(), status: :ok
  end

  def create
    myMonster = Monster.create!(initial_params)
    render json: myMonster, status: :created
  end

  def update
    myMonster = Monster.find(params[:id])
    myMonster.update!(params)
    render json: myMonster, status: :accepted
  end

  def destroy
    Monster.find(params[:id]).destroy
    head :no_content
  end

  private

  def initial_params
    params.require(:monster).permit(
      :monster_name,
      :user_id,
      :look_id,
      :armor_id,
      :weapon_id
    )
  end

  # def update_params
  #   params.permit(:user_id,:look_id,:monster_name,:armor_id,:weapon_id,:level,:hit_points,:base_armor,:attack,:magic,:movement,:bio)
  # end

  # def monster_not_found
  #   render json: {error: "Scary! Monster not found"}, status: :not_found
  # end

end
