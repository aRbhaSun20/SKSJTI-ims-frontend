export const USER_ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
};

export const UserReducers = (InitialState = getDAta(), actions) => {
  switch (actions.type) {
    case USER_ACTIONS.LOGIN:
      const data = { ...InitialState, ...actions.payload };
      localStorage.setItem("imsLogin", JSON.stringify(data));
      return data;

    default:
      return InitialState;
  }
};

const getDAta = () => {
  const data = localStorage.getItem("imsLogin");
  if (data) {
    const returnData = JSON.parse(data);
    if (returnData) return returnData;
  }
  return {
    _id: "",
    name: "",
    email: "",
    phone: "",
    token: "",
  };
};
