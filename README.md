# Bitduty

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * (if you don't install postgresql)
    On Mac OS to get up and running fast (with say Phoenix) simply run:

    $brew install postgresql && brew services start postgresql && psql postgres
    then type:  

    CREATE ROLE postgres;  
    ALTER ROLE postgres WITH LOGIN;  
    ALTER USER postgres CREATEDB;  
    then CTRL & D  
    $mix ecto.create  
  * Create and migrate your database with `mix ecto.setup`
    Then you should make .gitkeep(if you have error)
    $ vim priv/repo/migrations/.gitkeep
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `LOGGY_STACKS=1 MIX_ENV=dev iex -S mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
