require 'spec_helper'

describe StaticPagesController do

  describe "GET 'structure'" do
    it "returns http success" do
      get 'structure'
      response.should be_success
    end
  end

end
