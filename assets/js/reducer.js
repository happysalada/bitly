const initialState = {
  buys: {
    "id": "67e0eaec-07d7-54c4-a72c-2e92826897df",
    "status": "completed",
    "payment_method": {
      "id": "83562370-3e5c-51db-87da-752af5ab9559",
      "resource": "payment_method",
      "resource_path": "/v2/payment-methods/83562370-3e5c-51db-87da-752af5ab9559"
    },
    "transaction": {
      "id": "441b9494-b3f0-5b98-b9b0-4d82c21c252a",
      "resource": "transaction",
      "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/441b9494-b3f0-5b98-b9b0-4d82c21c252a"
    },
    "amount": {
      "amount": "1.00000000",
      "currency": "BTC"
    },
    "total": {
      "amount": "10.25",
      "currency": "USD"
    },
    "subtotal": {
      "amount": "10.10",
      "currency": "USD"
    },
    "created_at": "2015-01-31T20:49:02Z",
    "updated_at": "2015-02-11T16:54:02-08:00",
    "resource": "buy",
    "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/buys/67e0eaec-07d7-54c4-a72c-2e92826897df",
    "committed": true,
    "instant": false,
    "fee": {
      "amount": "0.15",
      "currency": "USD"
    },
    "payout_at": "2015-02-18T16:54:00-08:00"
  },
  sells: {
    "id": "67e0eaec-07d7-54c4-a72c-2e92826897df",
    "status": "completed",
    "payment_method": {
      "id": "83562370-3e5c-51db-87da-752af5ab9559",
      "resource": "payment_method",
      "resource_path": "/v2/payment-methods/83562370-3e5c-51db-87da-752af5ab9559"
    },
    "transaction": {
      "id": "441b9494-b3f0-5b98-b9b0-4d82c21c252a",
      "resource": "transaction",
      "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/441b9494-b3f0-5b98-b9b0-4d82c21c252a"
    },
    "amount": {
      "amount": "1.00000000",
      "currency": "BTC"
    },
    "total": {
      "amount": "9.75",
      "currency": "USD"
    },
    "subtotal": {
      "amount": "9.90",
      "currency": "USD"
    },
    "created_at": "2015-01-31T20:49:02Z",
    "updated_at": "2015-02-11T16:54:02-08:00",
    "resource": "sell",
    "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/sells/67e0eaec-07d7-54c4-a72c-2e92826897df",
    "committed": true,
    "instant": false,
    "fee": {
      "amount": "0.15",
      "currency": "USD"
    },
    "payout_at": "2015-02-18T16:54:00-08:00"
  }
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
    default:
      return state;
  }
}
