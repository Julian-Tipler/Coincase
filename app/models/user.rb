class User < ApplicationRecord
    validates :email, :password_digest, :session_token,  presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 8}, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 


    after_initialize :ensure_session_token

    attr_reader :password

    has_many :transactions

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    if @user && @user.is_password?(password)
      return @user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def buying_power 
    usd_owned = 25000
    transactions.each do |transaction|
      transaction_amount = transaction.price * transaction.quantity
      transaction.order_type == 'buy' ? usd_owned -= transaction_amount : usd_owned += transaction_amount
    end
    usd_owned.round(2)
  end

  def portfolio
    coins = transactions.distinct.pluck(:coin_id)
    hash = Hash[coins.collect{|coin|[coin,0]}]
    transactions.each do |transaction|
      if transaction.order_type == 'buy'
        hash[transaction.coin_id] += transaction.quantity
      else
        hash[transaction.coin_id] -= transaction.quantity
      end
    end
    hash.reject!{|k,v| v==0}
    hash
  end

  def recentTransactions
  end
  

end
