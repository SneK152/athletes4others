"use client";

import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ReactNode } from "react";
import { navLinks } from "./navLinks";
import { usePageContext } from "./context";

export default function Navbar() {
  return (
    <Popover as="nav" className="bg-lightgreen z-50 fixed w-full shadow-lg">
      {({ open }) => (
        <div className="padded-section">
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-darkgreen focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkgreen">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <p className="font-bold font-display text-xl">
                  Athletes4Others
                </p>
                <div className="hidden sm:block">
                  <ul className="flex gap-4 items-center h-full">
                    {navLinks.map((item) => (
                      <NavLink
                        key={item}
                        href={
                          "#" +
                          item
                            .split("'")
                            .join("")
                            .toLowerCase()
                            .split(" ")
                            .join("")
                        }
                      >
                        {item}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Popover.Panel className="sm:hidden absolute bg-lightgreen w-full z-50">
            {({ close }) => (
              <ul className="px-2 pt-2 pb-3 space-y-1">
                {/* {navLinks.map((item) => (
                <Popover.Button key={item.name} as={Fragment}>
                  <NavLink href={item.href} className="block">
                    {item.name}
                  </NavLink>
                </Popover.Button>
              ))} */}
                {navLinks.map((navLink, i) => (
                  <button className="block" key={i} onClick={() => close()}>
                    <NavLink
                      href={
                        "#" +
                        navLink
                          .split("'")
                          .join("")
                          .toLowerCase()
                          .split(" ")
                          .join("")
                      }
                    >
                      {navLink}
                    </NavLink>
                  </button>
                ))}
              </ul>
            )}
          </Popover.Panel>
        </div>
      )}
    </Popover>
  );
}

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

function NavLink(props: NavLinkProps) {
  const context = usePageContext();
  return (
    <li
      className={`${
        "" // context.currentPage === props.href ? "font-bold" : ""
      } text-base`}
    >
      <button
        onClick={() => {
          context.setCurrentPage(props.href);
          document.getElementById(props.href.substring(1))?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {props.children}
      </button>
    </li>
  );
}
