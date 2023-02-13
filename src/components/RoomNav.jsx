import React from "react";
import { NavLink } from "react-router-dom";

function RoomNav() {
  const active = { textDecoration: "underline" };
  const activeClass = "underline";

  return (
    <div className="flex">
      <NavLink
        to="/roomone"
        style={({ isActive }) => (isActive ? active : undefined)}
      >
        Room 1
      </NavLink>
      <NavLink
        to="/roomtwo"
        className={({ isActive }) => (isActive ? activeClass : undefined)}
      >
        Room 2
      </NavLink>
      <NavLink
        to="/roomthree"
        className={({ isActive }) => (isActive ? activeClass : undefined)}
      >
        Room 3
      </NavLink>
    </div>
  );
}

export default RoomNav;
