import moment from 'moment';
//Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'SET_TEXT':
      return {...state, text: action.text};

    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount'};

    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'};

    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
  }
};

export default filtersReducer;