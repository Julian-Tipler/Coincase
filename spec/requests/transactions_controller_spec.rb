require 'rails_helper'

RSpec.describe "TransactionsControllers", type: :request do
  user = User.create(first_name: 'Julian', last_name: 'Tipler', password_digest: 'password1', email: 'tipler.julian@gmail.com')
    describe "POST create" do
        it 'should create a new transaction if the user has sufficient buying power' do
            post(:create, params: { transaction: {user_id:user.id, coin_id: 'eth', price:2000, quantity: 2, order_type: 'buy'}})

            expect(response).to have_http_status(:ok)

            assert_not_nil Transaction.find_by(coin_id: 'eth')
        end
        it 'should reject transaction if the user does not have sufficient buying power' do
            post(:create, params: { transaction: {user_id:user.id, coin_id: 'eth', price:2000, quantity: 4000, order_type: 'buy'}})

            expect(response).to have_http_status(:error)
        end
    end
    describe "GET index" do
        it 'index route should return all transactions for only the current user' do
            Transaction.create(user_id:user.id, coin_id: 'lit', price: 100, quantity: 40, order_type: 'buy')
            get '/api/transactions'
            expect(JSON.parse(response.body)['transactions'].size).to eq(2)
        end
    end
end
