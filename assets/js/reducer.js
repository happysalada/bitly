const initialState = {
  page: 0,
  transactions: null,
  wallets: null,
  accounts: null,
  income: {}
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
      const income = action.transactions.reduce((acc, transaction) => {
        const {amount, currency} = transaction.amount;
        const originalAmount = acc[currency]
        if (originalAmount && parseFloat(amount) >= 0.0) {
          acc[currency] = originalAmount + parseFloat(amount)
          return acc;
        } else {
          if (!originalAmount) {
            acc[currency] = parseFloat(amount);
            return acc;
          }
          return acc;
        }
      }, {});
      return {
        ...state,
        income: income,
        transactions: action.transactions
      }
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.value
      }
    case 'CHECK_TAB':
    let value = 0;
      switch (action.location.pathname) {
        case '/app/wallets':
          value = 2;
          break;
        case '/app/transactions':
          value = 1;
          break;
        case '/home':
          value = 0;
          break;
        case '/app/taxes':
          value = 3;
          break;
      }
      return {
        ...state,
        page: value
      }
    default:
      return state;
  }
}
