defmodule BitdutyWeb.PageController do
  use BitdutyWeb, :controller

  def index(conn, _params) do
    current_user = get_session(conn, :current_user)
    render(conn, "index.html", current_user: current_user)
  end

  def home(conn, _params) do
    current_user = get_session(conn, :current_user)

    render(
      conn,
      "index.html",
      layout: {BitdutyWeb.LayoutView, "home.html"},
      current_user: current_user
    )
  end
end
