class TopicsController < ApplicationController

  def index
    @topics = Topic.all
    @new_topic = Topic.new
  end

  def create
    @topic = Topic.new(awesome_params)
    if @topic.save
      render :json => @topic.to_json
    else
      render :json => "you fucked up!", :status => 5000
    # render :text => awesome_params
    end
  end

  private

  def awesome_params
    params.require(:topic).permit(:title)
  end

end