defmodule BitdutyWeb.PageController do
  use BitdutyWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def home(conn, _params) do
    render conn, "index.html", layout: {BitdutyWeb.LayoutView, "home.html"}
  end
end
