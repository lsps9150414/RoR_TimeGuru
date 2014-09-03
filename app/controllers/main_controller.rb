class MainController < ApplicationController
    def index
        @stuffs = Stuff.where("priority_id IS ?", nil)

        @priorities = Priority.all
        
        @stuff = Stuff.new
    end
    
    def assignPriority
        @stuff = Stuff.find(params[:stuff_id])
        # when stuff is drop into a priority list
        if params[:priority_id]
            @priority = Priority.find(params[:priority_id])
            @priority.stuffs.push(@stuff)
        # when stuff is drop back into the buffer
        else
            @stuff.priority = nil
            @stuff.save
        end
        render json: {status: "ok"}
    end
    
    def createStuff
        @stuff = Stuff.new(stuff_params)
        @stuff.save
        render json: {status: "ok"}
    end
    
    private
    def stuff_params
        params.require(:stuff).permit(:title)
    end
end
