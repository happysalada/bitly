defmodule BitdutyWeb.Router do
  use BitdutyWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BitdutyWeb do

  end

  scope "/", BitdutyWeb do
    pipe_through :browser # Use the default browser stack
    get "/home", PageController, :home
    forward "/app/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", BitdutyWeb do
  #   pipe_through :api
  # end
end
