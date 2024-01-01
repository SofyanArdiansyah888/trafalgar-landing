import React from "react";

export default function Header(){
    return <header className={"container flex justify-between py-8"}>
        <div>
            Logo Here
        </div>

        <nav>
            <ul className={"flex gap-4"}>
                <li>Home</li>
                <li>Find A Doctor</li>
                <li>Apps</li>
                <li>Testimonials</li>
                <li>About Us</li>
            </ul>
        </nav>
    </header>
}
