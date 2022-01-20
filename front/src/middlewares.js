import {Route} from "react-router-dom";

export const loginCheck = () => {
    // LocalStorage

    const isLoggedIn = localStorage.getItem("ruby_login");

    return isLoggedIn || false;
};