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
  return sum_of_ratings / ratings.length;
}