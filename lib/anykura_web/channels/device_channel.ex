defmodule BitdutyWeb.DeviceChannel do
  use BitdutyWeb, :channel

  alias BitdutyWeb.Endpoint

  def join("device:lobby", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (device:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  def broadcast(event) do
    Endpoint.broadcast("device:lobby", event, %{})
  end

  def broadcast(event, payload) do
    Endpoint.broadcast("device:lobby", event, payload)
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
