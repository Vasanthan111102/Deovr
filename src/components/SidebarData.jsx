import React from "react";
import { IoMdVideocam } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaCrown } from "react-icons/fa";
<<<<<<< HEAD
import { FaFacebook } from "react-icons/fa";
=======
import { FaFacebook } from "react-icons/fa6";
import { IoMdBookmark } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
>>>>>>> cec5594d0f73f49b6716668247581fada4e2f578
import "./Sidebar.css";
import ToggleButton from "./ToggleButton";

export const SidebarData = [
  {
    title: "VIDEOS",
    path: "/",
    icon: <IoMdVideocam color = "grey"/>,
    cName: "nav-text",
  },
  {
    title: "PHOTOS",
    path: "/Photos",
    icon: <CiCamera color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "ORIGINALS",
    path: "/Originals",
    cName: "nav-text",
  },
  {
    title: "GETVRPLAYER",
    path: "/GetVrPlayer",
    icon: <LiaDownloadSolid color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "PREMIUM",
    path: "/Premium",
    icon: <FaCrown  color="black"/>,
    cName: "nav-text premium",
  },
  {
    title: "MY FAVOURITES",
    path: "/MyFavourites",
    icon: <CiHeart color="grey"/>,
    cName: "nav-text ",
  },
  {
    title: "MY SUBSCRIPTIONS",
    path: "/MySubscriptions",
    icon: <MdOutlineSubscriptions color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "PUBLIC PLAYLISTS",
    path: "/PublicPlayists",
    icon: <MdOutlinePlaylistAddCheckCircle color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "WATCH LATER",
    path: "/WatchLater",
    icon: <IoMdBookmark color = "lightgrey"/>,
    cName: "nav-text",
  },
  {
    title: "FORUM",
    path: "/Forum",
    icon: <MdOutlineForum color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "FACEBOOK",
<<<<<<< HEAD
    path: "/facebook",
    icon: <FaFacebook color="grey"/>,
=======
    path: "/FACEBOOK",
    icon: <FaFacebook color = "lightgrey"/>,
    cName: "nav-text",
  },
  {
    title: "180",
    icon: <ToggleButton />,
    cName: "nav-text",
  },
  {
    title: "360",
    icon: <ToggleButton />,
>>>>>>> cec5594d0f73f49b6716668247581fada4e2f578
    cName: "nav-text",
  },
  {
    title: "180",
    icon: <ToggleButton/>,
    cName: "nav-text",
  }
];
