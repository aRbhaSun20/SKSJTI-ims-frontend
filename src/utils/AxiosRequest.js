import axios from "axios";
//
//http://localhost:5000/graphql
export const AXIOS_ACTIONS = {
  QUERY: "query",
  GET: "get",
  POST: "post",
  MUTATION: "mutation",
  DELETE: "DELETE",
  URL: "https://agile-plains-12982.herokuapp.com/graphql",
  HEADERS: {
    "Content-Type": "application/json",
  },
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  START_JOB: "start_job",
  STOP_JOB: "stop_job",

  UPLOAD_DOC: "upload_doc",
  DELETE_USER: "delete_user",
  APPS_ACTIONS: "app_Actions",
};

export const MAILING_ACIONS = {
  USER_ID: "user_e0SxWGpxrSPuSO18sM4vS",
  TEMPLATE_ID: "template_m5x0ym7",
  SERVICE_ID: "service_z9mkz5i",
};

export const axiosSendRequest = async (type, sendData, url) => {
  let config = null;

  switch (type) {
    case AXIOS_ACTIONS.GET:
      config = {
        method: "get",
        url,
      };
      break;

    case AXIOS_ACTIONS.POST:
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}`,
        headers: AXIOS_ACTIONS.HEADERS,
        data: sendData,
      };
      break;

    case AXIOS_ACTIONS.DELETE:
      let formDelete = new FormData();
      formDelete.append("user_id", sendData.user_id);
      formDelete.append("token", sendData.token);
      formDelete.append("name", sendData.name);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}`,
        data: formDelete,
      };
      break;

    default:
      return null;
  }

  try {
    const { data } = await axios(config);
    return data;
  } catch (e) {
    if (e.response) {
      throw e.response.data;
    } else if (e.request) {
      throw e.request.response;
    } else {
      throw e.message;
    }
  }
};

export const axiosSendGraphQlRequest = async (sendData) => {
  if (sendData) {
    const {
      data: { data, errors },
    } = await axios
      .post(AXIOS_ACTIONS.URL, sendData, AXIOS_ACTIONS.HEADERS)
      .catch((e) => console.error(e));

    return { data, errors };
  }
  return null;
};
