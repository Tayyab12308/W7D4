class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all #.includes(:something)
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

end