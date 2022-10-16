export const addUserToLocalStorage = (user: string) => {
 localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
 localStorage.removeItem("user");
 //  localStorage.removeItem("token");
};

export const getUserFromLocalStorage = () => {
 const result = localStorage.getItem("user");
 const user = result ? JSON.parse(result) : null;
 return user;
};

// save item in localStorage
export const setItem = (key:any, value:any) => {
 localStorage.setItem(key, value);
};

// get an item from localStorage with its key
export const getItem = (key:any) => {
 if (localStorage.getItem(key)) return localStorage.getItem(key);
 return false;
};

// remove specific item with its key from localStorage
export const removeItem = (key:any) => {
 if (getItem(key) === false) return false;
 localStorage.removeItem(key);
};

// cleare all localStorage of this site
export const clearStorage = () => {
 localStorage.clear();
};
