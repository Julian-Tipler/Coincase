class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :user_id, null: false
      t.string :coin_id, null: false
      t.decimal :price, null: false, precision: 8, scale: 2
      t.decimal :quantity, null: false, precision: 8, scale: 2
      t.string :order_type, null: false
      t.timestamps
    end
    add_index :transactions, :user_id
  end
end
