import React, { useState } from "react";
import Logo from "../img/mainlogo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Navbar = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isMenu, setIsMenu] = useState(false);

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      // console.log(response);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <div className="w-screen fixed z-50 p-3 px-4 md:p-6 md:px-15 bg-primary">
      {/* desktop nav */}
      <div className=" hidden md:flex h-full w-full p-4 justify-between">
        <Link to={"/"} className="flex items-center gap-1 cursor-pointer">
          <img
            src={Logo}
            className="w-11 object-cover cursor-pointer"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold cursor-pointer">
            Oasis
          </p>
        </Link>
        <div className=" flex items-center gap-8 mr-2">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-7"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer
            " onClick={()=>setIsMenu(false)}>
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer
            " onClick={()=>setIsMenu(false)}>
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer
            " onClick={()=>setIsMenu(false)}>
              About
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer
            " onClick={()=>setIsMenu(false)}>
              Services
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center cursor-pointer">
            <MdOutlineShoppingBasket className="text-textColor text-2xl ml-2" />
            <div className="w-6 h-6 rounded-full bg-cartNumBg flex justify-center text-center absolute -top-3 -right-4">
              <p className="text-sm text-12 text-center text-white font-semibold">
                2
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="profile"
              className="w-10 min-w-[40px] h-10 min-h-[40] cursor-pointer drop-shadow-xl rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-60 shadow-xl flex flex-col rounded-lg absolute px-4 py-2 top-9 right-0"
              >
                {user && user.email === "apatrickadjei@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className=" py-2 px-4 items-center flex cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base
                    " onClick={()=>setIsMenu(false)}>
                      new item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className=" py-2 px-4 items-center flex gap-2 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  logout <MdLogout />{" "}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className=" flex md:hidden items-center justify-between w-full h-full ">
        <div className="relative flex items-center justify-center cursor-pointer">
          <MdOutlineShoppingBasket className="text-textColor text-2xl ml-2" />
          <div className="w-6 h-6 rounded-full bg-cartNumBg flex justify-center text-center absolute -top-3 -right-4">
            <p className="text-sm text-12 text-center text-white font-semibold">
              2
            </p>
          </div>
        </div>
        <Link to={"/"} className="flex items-center gap-1 cursor-pointer">
          <img
            src={Logo}
            className="w-11 object-cover cursor-pointer"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold cursor-pointer">
            Oasis
          </p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt="profile"
            className="w-10 min-w-[40px] h-10 min-h-[40] cursor-pointer drop-shadow-xl rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-60 shadow-xl flex flex-col rounded-lg absolute py-2 top-9 right-0"
            >
              {user && user.email === "apatrickadjei@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className=" py-2 px-4 items-center flex cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base
                  " onClick={()=>setIsMenu(false)}>
                    new item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-300 px-4 py-2
                " onClick={()=>setIsMenu(false)}>
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-300 px-4 py-2
                " onClick={()=>setIsMenu(false)}>
                  Menu
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-300 px-4 py-2
                " onClick={()=>setIsMenu(false)}>
                  About
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-300 px-4 py-2
                " onClick={()=>setIsMenu(false)}>
                  Services
                </li>
              </ul>

              <p
                className=" m-2 p-2 rounded-md shadow-md items-center justify-center bg-gray-200 flex gap-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                logout <MdLogout />{" "}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
