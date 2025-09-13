export function getToken() {
    return localStorage.getItem("authToken");
  }
  
  export function isLoggedIn() {
    return !!getToken();
  }
  
  export function logout() {
    localStorage.removeItem("authToken");
  }
  