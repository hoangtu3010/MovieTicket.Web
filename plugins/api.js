import apiUrl from "../constants/api";
export default (context, inject) => {
  inject("api", {
    ...apiUrl,
    getApiError: (ex) => {
      const errorData = ex.response.data.responseException.exceptionMessage;
      if (!errorData.error) {
        if (errorData.responseException) {
          return errorData.responseException.exceptionMessage;
        } else {
          return errorData;
        }
      }

      let msg = "";
      const exceptionMessage = errorData.error;
      if (exceptionMessage) {
        const arr = [];
        for (const property in exceptionMessage) {
          arr.push(exceptionMessage[property]);
        }
        msg = arr.join(",");
      }
      return msg;
    },
    getApiErrorObject: (ex) => JSON.parse(this.getApiError(ex)),
    transformRequest: (jsonData = {}) =>
      Object.entries(jsonData)
        .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join("&"),
  });
};