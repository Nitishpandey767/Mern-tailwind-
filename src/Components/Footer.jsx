import React from "react";

const Footer =()=>{
    return (
        <div className=" flex flex-col gap-12 md:flex-row md:justify-between">
            <ul className=" flex font-lato gap-6 text-gray-400">
                <li>
                    <a href="http://">Facebook</a>
                </li>
                <li>
                    <a href="http://">Instagram</a>
                </li>
                <li>
                    <a href="http://">Twiter</a>
                </li>
            </ul>
            <div className=" flex gap-2">
                <img src="./assets/Help-Avatar.svg" alt="Help" />
                <div>
                    <p className=" font-playfair font-thin">Have Any Question</p>
                    <a className=" font-lato font-medium" href="http://">Talk to Pandey</a>
                </div>
            </div>
        </div>

    )
}

export default Footer