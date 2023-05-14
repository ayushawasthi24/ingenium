import React from "react";
import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsDiscord,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex p-5 pt-8 flex-wrap bg-gradient-to-r from-[#00011A] to-[#00035E]">
      <div className="flex-1 mx-14">
        <h1 className="text-3xl font-bold">Fluxus</h1>
        <h3>IIT Indore</h3>
      </div>
      <div className="flex-1  mx-14">
        <p className="text-left text-2xl">Address</p>
        <p className="text-left">Indian Institute of Technology, Indore</p>
        <p className="text-left">Khandwa Road, Simrol, Indore</p>
        <p className="text-left">453552, INDIA</p>
      </div>
      <div className="flex-1 mx-14">
        <h3 className="text-2xl">Follow</h3>
        <ul className="">
          <li className="flex">
            <span className="mr-1 mt-1">
              <BsInstagram />
            </span>
            <a className="" href="#">
              Instagram
            </a>
          </li>
          <li className="flex">
            <span className="mr-1 mt-1">
              <BsLinkedin />
            </span>
            <a className="" href="#">
              Linkedin
            </a>
          </li>
          <li className="flex">
            <span className="mr-1 mt-1">
              <BsFacebook />
            </span>
            <a className="" href="#">
              Facebook
            </a>
          </li>
          <li className="flex">
            <span className="mr-1 mt-1">
              <BsTwitter />
            </span>
            <a className="" href="#">
              Twitter
            </a>
          </li>
          <li className="flex">
            <span className="mr-1 mt-1">
              <BsDiscord></BsDiscord>
            </span>
            <a className="" href="#">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
