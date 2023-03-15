class CreateJoinLooks < ActiveRecord::Migration[7.0]
  def change
    create_table :join_looks do |t|
      t.integer :creature_id
      t.integer :look_id

      t.timestamps
    end
  end
end
