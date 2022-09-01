export const RUNNING_ACTIONS = {
  CHANGE_STATE: "change_state",
};

export const RunTimeReducers = (InitialState = getDAta(), actions) => {
  switch (actions.type) {
    case RUNNING_ACTIONS.CHANGE_STATE:
      const data = { ...InitialState, ...actions.payload };
      localStorage.setItem("imsRST", JSON.stringify(data));
      return data;

    default:
      return InitialState;
  }
};

const getDAta = () => {
  const data = localStorage.getItem("imsRST");
  if (data) {
    const returnData = JSON.parse(data);
    if (returnData) return returnData;
  }
  return {
    toggleMode: false,
    leftCurrent:"Professor"
  };
};
