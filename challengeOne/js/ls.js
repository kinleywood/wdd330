// the key is the name, data is an object that needs to use JSON.stringify() to set and JSON.parse() to get.
export function writeToLS(key, data) { 
  window.localStorage.clear();
  window.localStorage.setItem(key, JSON.stringify(data));
}

