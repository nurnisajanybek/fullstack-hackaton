export const API = "http://34.123.240.158/";

export const isAdmin = () => {
  return localStorage.getItem('username') == 'admin@admin.com' ? true : false
};

export const checkStorage = (key) => {
  if(!localStorage.getItem(key)){
    localStorage.setItem(key , '[]')
  }
}