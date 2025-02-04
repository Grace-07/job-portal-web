import { useState } from "react";
import _ from "lodash";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuItems,
  MenuButton,
  MenuItem,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ListBulletIcon,
  QueueListIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { useAppContext } from "../contexts/AppContext";
import Logout from "../pages/Logout";
import { APPLICANT, EMPLOYER } from "../constant/variable";

const Navbar = () => {
  const { isLoggedIn, user } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [logout, setLogout] = useState(false);

  const isApplicant = _.get(user, "type") === APPLICANT || false;
  const isEmployer = _.get(user, "type") === EMPLOYER || false;

  const id = _.get(user, "_id", null);

  console.log("isApplicant", isApplicant);

  console.log("isLoggedIn", isLoggedIn);

  const products = [];

  if (isApplicant || !isLoggedIn) {
    products.push({
      name: "Find a Job",
      description:
        "Searching for opportunities that match your skills and applying to them",
      href: "/jobs",
      icon: MagnifyingGlassIcon,
    });
  }

  if(isApplicant) {
    products.push({
      name: "Your Job Applications",
      description:
        "Track the status and details of the positions you’ve applied for.",
      href: "/jobs/apply",
      icon: QueueListIcon,
    });
  }

  if (isEmployer) {
    products.push({
      name: "Job List",
      description:
        "Here’s the list of jobs you’ve posted. Review and manage your active job openings.",
      href: "/jobs",
      icon: ListBulletIcon,
    });
    products.push({
      name: "Post a Job",
      description: "Sharing a job opening to attract qualified candidates",
      href: "/jobs/add",
      icon: PlusIcon,
    });
    products.push({
      name: "Your Applicants",
      description: "Browse the list of applicants for the job openings you've posted.",
      href: "/jobs/apply",
      icon: UserGroupIcon,
    });
  }

  const handleLogout = () => setLogout(!logout);

  return (
    <>
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Job
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <a
              href="/companies"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Company
            </a>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn ? (
              // <a
              //   onClick={handleLogout}
              //   className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
              // >
              //   Log out <span aria-hidden="true">&rarr;</span>
              // </a>
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href={`/profile/${id}`}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  {/* <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Settings
                    </a>
                  </MenuItem> */}
                  <MenuItem>
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Log out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <a
                href="/login"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/companies" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Job
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>

                  <a
                    href="/companies"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>

                <div className="py-6">
                  {isLoggedIn ? (
                    <>
                      <a
                        href={`/profile/${id}`}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Your Profile
                      </a>
                      <a
                        onClick={handleLogout}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                      >
                        Log out
                      </a>
                    </>
                  ) : (
                    <a
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <Logout handleModal={handleLogout} openModal={logout} />
    </>
  );
  // return (
  //   <div>
  //     <nav className="bg-blue-600 text-white shadow-md">
  //       <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
  //         {/* Logo / Branding */}
  //         <div className="text-2xl font-bold">
  //           <a href="/" className="text-white">
  //             JobPortal
  //           </a>
  //         </div>

  //         {/* Navigation Links */}
  //         <div className="space-x-6 hidden md:flex">
  //           <a href="/jobs" className="hover:text-gray-300">
  //             Jobs
  //           </a>
  //           <a href="/companies" className="hover:text-gray-300">
  //             Companies
  //           </a>
  //         </div>

  //         {/* Sign Up / Sign In */}
  //         <div className="flex items-center space-x-6">
  //           <a href="/register" className="hover:text-gray-300">
  //             Sign Up
  //           </a>
  //           <a href="/login" className="hover:text-gray-300">
  //             Sign In
  //           </a>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
};

export default Navbar;
