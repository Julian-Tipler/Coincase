class Api::TransactionsController < ApplicationController
    def create
        @transaction = Transaction.new(transaction_params)
        user = current_user
        if @transaction.price * @transaction.quantity > user.buying_power
            render json: ['You do not have sufficient funds to make this purchase'], status: 422
        else
            if @transaction.save
                render 'api/users/show'
            else
                render json: @transaction.errors.full_messages, status: 422
            end
        end
    end

    #1. change buy sell logic
    #2. instead of 'transaction successful' return the user show json which will then update the user's worth
    
    private
    def transaction_params
        params.require(:transaction).permit(:user_id, :coin_id, :price, :quantity, :order_type)
    end

end
