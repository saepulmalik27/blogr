"use client";
import React, { Fragment } from "react";
import SVG from "react-inlinesvg";
import { Menu, Transition } from "@headlessui/react";
import useAppbar from "./_core/_hooks";
import { twMerge } from "tailwind-merge";

const Appbar = () => {
  const { menu } = useAppbar();

  return (
    <div className="flex gap-16 items-center justify-between">
      <SVG src="/assets/logo.svg" className="flex-shrink-0" />

      <div className="hidden md:flex justify-end md:justify-between flex-grow items-center">
        <nav
          className={twMerge(
            "inline-flex gap-8  text-white items-center"
          )}
        >
          {menu.map((val, index) => (
            <Menu key={index} as="div" className={"relative"}>
              <Menu.Button className={"inline-flex gap-2 items-center"}>
                <span className="capitalize font-bold">{val.label}</span>{" "}
                <SVG src="/assets/icon-arrow-light.svg" />{" "}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="div"
                  className={
                    "bg-white p-8 flex flex-col gap-4 rounded-md shadow absolute mt-5 min-w-[168px] left-0 origin-top-left"
                  }
                >
                  {val.children.map((val, index) => (
                    <Menu.Item as={"div"} key={index}>
                      {" "}
                      <span className="text-black capitalize text-[15px] hover:font-bold cursor-pointer select-none">
                        {val.label}
                      </span>{" "}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </nav>
        <div className="flex gap-8 items-center">
          <p className="font-bold text-white select-none cursor-pointer">
            Login
          </p>
          <button className=" btn btn-secondary font-bold">Signup</button>
        </div>
      </div>
      <SVG src="/assets/icon-hamburger.svg" className="md:hidden cursor-pointer" />
    </div>
  );
};

export default Appbar;
