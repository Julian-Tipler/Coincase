class Transaction < ApplicationRecord
    validates :user_id, :coin_id, :price, :quantity, :order_type, presence: true

    belongs_to :user
end
