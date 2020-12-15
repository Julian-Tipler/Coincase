class Transaction < ApplicationRecord
    validates :user_id, :coin_id, :price, :quantity, :order_type, presence: true
    validates :quantity, numericality: {greater_than: 0}

    belongs_to :user
end
