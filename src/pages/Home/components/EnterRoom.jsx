import React from "react";
import { NavLink } from "react-router-dom";

function EnterRoom() {
  const rooms = [
    { name: "Room One", path: "/roomone" },
    { name: "Room Two", path: "/roomtwo" },
    { name: "Room Three", path: "/roomthree" },
  ];

  return (
    <div>
      <nav>
        <ul>
          {rooms.map((room) => {
            return (
              <li key={room.name}>
                <button className="rounded-full bg-secondary p-6 m-4 w-60">
                  <NavLink to={room.path}>{room.name}</NavLink>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default EnterRoom;
