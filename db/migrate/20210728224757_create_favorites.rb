class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.string :user_id
      t.string :coin_id

      t.timestamps
    end
    add_index :favorites,:user_id
  end
end
