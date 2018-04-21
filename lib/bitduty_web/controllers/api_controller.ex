defmodule BitdutyWeb.ApiController do
  use BitdutyWeb, :controller

  def accounts(conn, _params) do
    with token when not is_nil(token) <- get_session(conn, :access_token),
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} <-
           HTTPoison.get("https://api.coinbase.com/v2/accounts", ["Authorization": "Bearer #{token}", "Accept": "Application/json; Charset=utf-8"], [ssl: [{:versions, [:'tlsv1.2']}], recv_timeout: 500]
           ) do
      conn
      |> put_status(200)
      |> json(%{
        body: body
      })
    else
      _ ->
        conn
        |> put_status(400)
        |> json(%{
          message: "not a valid request friend"
        })
    end
  end
end
