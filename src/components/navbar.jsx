import React from "react";

export default function Navbar() {

    return <>
        <div>
            Navbar
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/">Home</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <a href="/shop">Shop</a> */}
            <a href="/brand-login">Brand Login</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/brand">🔒 Brand Home Page</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/influencer-login">Influencer Login</a>
        </div>
    </>
}