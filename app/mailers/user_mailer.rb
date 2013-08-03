class UserMailer < ActionMailer::Base
  # DEFAULT_EMAIL = "caubienhuymanh@caubien.com"
  DEFAULT_EMAIL = "anhvn01457@gmail.com"

  default from: DEFAULT_EMAIL

  def contact_mail message
    @message = message
    mail(to: DEFAULT_EMAIL, subject: "Bạn có 1 email liên lạc từ caubien.com",
      from: @message.email)
  end

end
