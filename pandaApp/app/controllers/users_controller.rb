class UsersController < ApplicationController

	before_action :authenticate_user!
	
	def create_user
		@id = self.create()

		if @id
			session[:user_id] = @id
			@message = 'User Created'
			@status = 200
		else
			@message = 'User not created'
			@status = 204
		end

		@response = { :status => @status, :message => @message }

		render :json => @response

		# logger.debug session[:user_id]
		# render :json => session[:user_id]
	end

	def index
		@user = current_user
		@users = User.all 
	end

	def create
		@user = User.new(user_params)
		# @profile = Profile.new(profile_params)
		if @user.save
			return @user.id
		else
			return false
		end
		# @profile.user_id = @user.id
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		respond_to do |format|
			format.html { redirect_to users_path, notice: 'User was successfully destroyed.' }
		end
	end

	private

	def user_params
		return params.require(:user).permit(:email, :password, :password_confirmation)
	end
	# def profile_params
	# 	return params.require(:user).permit(:name)
	# end
end
