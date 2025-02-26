import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/brandAuthSlice";

export default function Navbar() {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutUser({ }));
      };

    return <>
        <div>
            Navbar
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/">Home</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <a href="/shop">Shop</a> */}
            <a href="/brand-login">Brand Login</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/brand-signup">Brand Sign up</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/brand">🔒 Brand Home Page</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/influencer-login">Influencer Login</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={logout}>Logout</button>
        </div>
    </>
}