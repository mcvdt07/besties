class ArtistController < ApplicationController
    def index
		@artist = Artist.all
	end
end
