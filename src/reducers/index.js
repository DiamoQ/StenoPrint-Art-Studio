const initialState = {
  goods: [],
  goodsLoadingStatus: 'idle',
  filters: [],
  activeFilters: {
    material: [],
    color: [],
    collection: []
  },
  activeFiltersPull: {
    material: [],
    color: [],
    collection: []
  },
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
      case 'ACTIVE_FILTERS_APPLIED': 
        return {
          ...state,
          activeFilters: {
            material: [...state.activeFiltersPull.material],
            color: [...state.activeFiltersPull.color],
            collection: [...state.activeFiltersPull.collection]
          },
        }
      case 'ACTIVE_FILTERS_CLEARED': 
        return {
          ...state,
          activeFilters: {
            material: [],
            color: [],
            collection: []
          },
          activeFiltersPull: {
            material: [],
            color: [],
            collection: []
          },
        }
      case 'ACTIVE_FILTERS_ADDED':
          return {
            ...state,
            activeFiltersPull: {
              material: action.filterKey === 'material' ? [...state.activeFiltersPull.material, action.payload] : [...state.activeFiltersPull.material],
              color: action.filterKey === 'color' ? [...state.activeFiltersPull.color, action.payload] : [...state.activeFiltersPull.color],
              collection: action.filterKey === 'collection' ? [...state.activeFiltersPull.collection,  action.payload] : [...state.activeFiltersPull.collection]
            },
          }
      case 'ACTIVE_FILTERS_DELETED':
          return {
            ...state,
            activeFiltersPull: {
              material: action.filterKey === 'material' ? [...state.activeFiltersPull.material.filter(item => item !== action.payload)] : [...state.activeFiltersPull.material],
              color: action.filterKey === 'color' ? [...state.activeFiltersPull.color.filter(item => item !== action.payload)] : [...state.activeFiltersPull.color],
              collection: action.filterKey === 'collection' ? [...state.activeFiltersPull.collection.filter(item => item !== action.payload)] : [...state.activeFiltersPull.collection]
            },
          }
      default: return state
  }
}

export default reducer;