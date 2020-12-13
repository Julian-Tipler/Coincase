class Api::TransactionsController < ApplicationController
    def create
        @transaction = Transaction.new(transaction_params)
        if @transaction.save
            render json:['successful transaction']
        else
            render json: @transaction.errors.full_messages, status: 422
        end
    end
    
    private
    def transaction_params
        params.require(:transaction).permit(:user_id, :coin_id, :price, :quantity, :order_type)
    end

end
