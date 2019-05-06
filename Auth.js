import { AsyncStorage } from "react-native";

export const USER_KEY = "some_key";

//when signing in setting user key to true
export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

//when signing out rmoving user key
export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

//creating a new Promise with resolve, reject => first initial operation
//.then(response if response then return true else return false).catch error and reject with error
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(key => {
        if (key !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(error => reject(error));
  });
};
