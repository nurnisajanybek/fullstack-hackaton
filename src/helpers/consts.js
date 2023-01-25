export const API = "http://34.123.240.158/";

export const isAdmin = () => {
  return localStorage.getItem('username') == 'admin@admin.com' ? true : false
};

export const checkStorage = (key) => {
  if(!localStorage.getItem(key)){
    localStorage.setItem(key , '[]')
  }
}

export const averageRating = (ratings) => {
  let sum_of_ratings = ratings?.reduce((acc, cur) => acc + +cur?.hotel_rating, 0);
  return Math.ceil(sum_of_ratings / ratings.length);
}

export const getDateAndTime = (given_date) => {
  const date = new Date(given_date);
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  let hh = date.getHours();
  let mins = date.getMinutes();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  if (mins < 10) mins = '0' + mins;
  if (hh < 10) hh = '0' + hh;

  const formattedDate = hh + ':' + mins + ' - ' + dd + '.' + mm + '.' + yyyy;
  return formattedDate
}