defmodule AnykuraWeb.PageController do
  use AnykuraWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
