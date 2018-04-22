const initialState = {
  page: 0,
  transactions: null,
  wallets: null,
  accounts: null,
  incomeBTC: 0,
  incomeUSD: 0
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
      console.log(action.data.data);
      let accounts = action.data.data.map(account => {
        console.log(account);
        return account.id
      });
      console.log(accounts);
      return {
        ...state,
        wallets: action.data,
        accounts: accounts
      }
    case 'UPDATE_TRANSACTIONS':
      console.log('TRANSACTIONS', action.transactions);
      return {
        ...state,
        transactions: action.transactions
      }
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.value
      }
    default:
      return state;
  }
}
