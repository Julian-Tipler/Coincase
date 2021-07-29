require 'rails_helper'

describe 'transactions api', type: :request do
    it 'should return all transactions' do
        user = User.create(first_name: 'Julian', last_name: 'Tipler', password_digest: 'password1', email: 't.julian@gmail.com')
        Transaction.create(user_id:user.id, coin_id: 'eth', price: 2000, quantity: 5, order_type: 'buy')
        Transaction.create(user_id:user.id, coin_id: 'lit', price: 100, quantity: 40, order_type: 'buy')
        puts Transaction.all
        get '/api/transactions'
        puts JSON.parse(response.body)
        expect(JSON.parse(response.body)['transactions'].size).to eq(2)
    end
end