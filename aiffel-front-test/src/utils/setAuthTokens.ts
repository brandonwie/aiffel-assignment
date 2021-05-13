const setAuthToken = (token: string) => {
  if (token) {
    //! Assign the token to HTTP headers using axios or fetch
    localStorage.setItem('token', token);
  } else {
    //! Delete the token from header
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
