export const goodsFetching = () => {
  return {
    type: 'GOODS_FETCHING'
  }
};

export const goodsFetched = (data) => {
  return {
    type: 'GOODS_FETCHED',
    payload: data
  }
};

export const goodsFetchingError = () => {
  return {
    type: 'GOODS_FETCHING_ERROR'
  }
};

export const filtersFetching = () => {
  return {
    type: 'FILTERS_FETCHING'
  }
};

export const filtersFetched = (data) => {
  return {
    type: 'FILTERS_FETCHED',
    payload: data
  }
};

export const filtersFetchingError = () => {
  return {
    type: 'FILTERS_FETCHING_ERROR'
  }
};