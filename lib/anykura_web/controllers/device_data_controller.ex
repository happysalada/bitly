defmodule BitdutyWeb.DeviceDataController do
  use BitdutyWeb, :controller
  alias BitdutyWeb.DeviceChannel
  require Logger

  def index(conn, %{"event" => event} = params) do
    IO.inspect(params)
    DeviceChannel.broadcast(event)
    conn
    |> put_status(200)
    |> json(%{
      message: "all good"
    })
  end

  def index(conn, params) do
    IO.inspect(params, label: ">>>DEVICE DATA<<<")
    conn
    |> IO.inspect()
    |> put_status(200)
    |> json(%{
      message: "all good"
    })
  end
end
