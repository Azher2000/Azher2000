export function loadCategories() {
  return (dispatch) => {
    dispatch({ type: "LOAD_CATEGORIES_START" });
    fetch("https://run.mocky.io/v3/297308ac-aeb0-4e98-8868-9c1d3a878a4c")
      .then(function (response) {
        let result = [];
        if (response && response.status===200) {
          console.log(response)
          result = response.json();
        }
        return result;
      })
      .then((res) => {
        dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
      });
  };
}

function categoriesReducer(
  state = {
    isLoading: true,
    categories: [],
  },
  action
) {
  switch (action.type) {
    case "LOAD_CATEGORIES_START": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "LOAD_CATEGORIES_DONE": {
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
}

export default categoriesReducer;
