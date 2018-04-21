const initialState = {
  page: 0,
  transactions: null,
  wallets: null,
  accounts: null
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
      console.log(action.data);
      return {
        ...state,
        transactions: action.data
      }
    default:
      return state;
  }
}
