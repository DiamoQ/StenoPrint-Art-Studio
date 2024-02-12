const initialState = {
  goods: [],
  goodsLoadingStatus: 'idle',
  filters: [],
  activeFilters: [],
  filtersLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOODS_FETCHING':
      return {
        ...state,
        goodsLoadingStatus: 'loading'
      }
    case 'GOODS_FETCHED':
      return {
        ...state,
        goods: action.payload,
        goodsLoadingStatus: 'idle'
      }
      case 'GOODS_FETCHING_ERROR':
        return {
          ...state,
          goodsLoadingStatus: 'error'
        }
      case 'FILTERS_FETCHING':
        return {
          ...state,
          filtersLoadingStatus: 'loading'
        }
      case 'FILTERS_FETCHED':
        return {
          ...state,
          filters: action.payload,
          filtersLoadingStatus: 'idle'
        }
      case 'FILTERS_FETCHING_ERROR':
        return {
          ...state,
          filtersLoadingStatus: 'error'
        }
      // case 'ACTIVE_FILTERS_ADDED':
      //     return {
      //       ...state,
      //       activeFilters: action.payload,
      //     }
      // case 'ACTIVE_FILTERS_DELETED':
      //     return {
      //       ...state,
      //       activeFilters: activeFilters.filter(item => item !== action.payload),
      //     }
      default: return state
  }
}

export default reducer;