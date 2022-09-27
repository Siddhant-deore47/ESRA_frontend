export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

export const loggedOut = (next) => {
  localStorage.removeItem("data");
  next();
};
export const getCurrentUser = () => {
  if (isLoggedIn()) {
    return JSON.stringify(localStorage.getItem("data")).username;
  } else {
    return undefined;
  }
};
