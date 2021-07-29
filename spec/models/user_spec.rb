require 'rails_helper'

RSpec.describe User, type: :model do
  it 'returns the correct first name' do
    user = User.create(first_name: 'Julian', last_name: 'Tipler', password_digest: 'password1', email: 'tipler.julian@gmail.com')

    expect(user.first_name).to eq 'Julian'
  end

  it 'returns the correct transations with the transations method' do
    Transaction.create(user_id:user.id, coin_id: 'lit', price: 100, quantity: 40, order_type: 'buy')
    expect(user.transactions).size.to eq(1)
  end

  it 'returns the correct buying_power' do
    expect(user.buying_power).to eq(21000)
  end

  it 'returns the users portfolio with one entry per coin_id' do
    Transaction.create(user_id:user.id, coin_id: 'lit', price: 100, quantity: 10, order_type: 'buy')
    Transaction.create(user_id:user.id, coin_id: 'eth', price: 2000, quantity: 1, order_type: 'buy')
    expect(user.portfolio).size.to eq(2)
end
