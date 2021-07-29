require 'rails_helper'

RSpec.describe User, type: :model do
  it 'returns the correct first name' do
    user = User.create(first_name: 'Julian', last_name: 'Tipler', password_digest: 'password1', email: 'tipler.julian@gmail.com')

    expect(user.first_name).to eq 'Julian'
  end

  it 'returns the correct buying power when given a list of transactions' do
    user.
  end

end
