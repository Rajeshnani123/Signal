const initialState = {
  firstName: "",
  secondName: "",
  user: {},
  userLogin: false,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA": {
      return {
        ...state,
        firstName: action.firstName,
        secondName: action.secondName,
      };
    }

    case "USER_LOGIN": {
      return {
        ...state,
        user: action.user,
        userLogin: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
