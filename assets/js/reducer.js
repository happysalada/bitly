const initialState = {
  page: 0,
  transactions: [
    {
      "exchange": "coinbase",
      "id": "8250fe29-f5ef-5fc5-8302-0fbacf6be51e",
      "type": "buy",
      "status": "completed",
      "amount": {
        "amount": "1.00000000",
        "currency": "BTC"
      },
      "native_amount": {
        "amount": "10.00",
        "currency": "USD"
      },
      "description": null,
      "created_at": "2015-03-26T13:42:00-07:00",
      "updated_at": "2015-03-26T15:55:45-07:00",
      "resource": "transaction",
      "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/8250fe29-f5ef-5fc5-8302-0fbacf6be51e",
      "buy": {
        "id": "5c8216e7-318a-50a5-91aa-2f2cfddfdaab",
        "resource": "buy",
        "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/buys/5c8216e7-318a-50a5-91aa-2f2cfddfdaab"
      },
      "instant_exchange": false,
      "details": {
        "title": "Bought bitcoin",
        "subtitle": "using Capital One Bank"
      }
    },
    {
      "exchange": "coinbase",
      "id": "57ffb4ae-0c59-5430-bcd3-3f98f797a66c",
      "type": "send",
      "status": "completed",
      "amount": {
        "amount": "-0.00100000",
        "currency": "BTC"
      },
      "native_amount": {
        "amount": "-0.01",
        "currency": "USD"
      },
      "description": null,
      "created_at": "2015-03-11T13:13:35-07:00",
      "updated_at": "2015-03-26T15:55:43-07:00",
      "resource": "transaction",
      "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/57ffb4ae-0c59-5430-bcd3-3f98f797a66c",
      "network": {
        "status": "off_blockchain",
        "name": "bitcoin"
      },
      "to": {
        "id": "a6b4c2df-a62c-5d68-822a-dd4e2102e703",
        "resource": "user",
        "resource_path": "/v2/users/a6b4c2df-a62c-5d68-822a-dd4e2102e703"
      },
      "instant_exchange": false,
      "details": {
        "title": "Sent bitcoin",
        "subtitle": "to User 2"
      }
    },
    {
      "exchange": "coinbase",
      "id": "8250fe29-f5ef-5fc5-8302-0fbacf6be456",
      "type": "sell",
      "status": "pending",
      "amount": {
        "amount": "1.00000000",
        "currency": "BTC"
      },
      "native_amount": {
        "amount": "10.00",
        "currency": "USD"
      },
      "description": null,
      "created_at": "2015-03-26T13:42:00-07:00",
      "updated_at": "2015-03-26T15:55:45-07:00",
      "resource": "transaction",
      "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/8250fe29-f5ef-5fc5-8302-0fbacf6be51e",
      "buy": {
        "id": "5c8216e7-318a-50a5-91aa-2f2cfddfdaab",
        "resource": "buy",
        "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/buys/5c8216e7-318a-50a5-91aa-2f2cfddfdaab"
      },
      "instant_exchange": false,
      "details": {
        "title": "Bought bitcoin",
        "subtitle": "using Capital One Bank"
      }
    },
  ],
  wallets: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LIVE_UPDATE_ON':
      return {
        ...state,
        title: 'You are connecte to live updates',
        message: 'Thank you for your business'
      }
    case 'LIVE_UPDATE_OFF':
      return initialState;
    case 'UPDATE_ACCOUNTS':
      console.log(action.data);
      return {
        ...state,
        wallets: action.data
      }
    default:
      return state;
  }
}
