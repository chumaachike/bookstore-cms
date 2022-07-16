const CHECK = 'bookstore-cms/categories/CHECK_STATUS';

export const checkStatis = () => ({
  type: CHECK,
});

const categoriesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';

    default:
      return state;
  }
};

export default categoriesReducer;
