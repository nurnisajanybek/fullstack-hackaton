export const API = "http://34.123.240.158/";

export const isAdmin = () => {
  return localStorage.getItem('username') == 'admin@admin.com' ? true : false
};

