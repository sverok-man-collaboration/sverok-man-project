import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function EnterRoom() {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([
    { name: "Room One", path: "/roomone" },
    { name: "Room Two", path: "/roomtwo" },
    { name: "Room Three", path: "/roomthree" },
  ]);

  function randomizeRooms(rooms) {
    for (let i = rooms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rooms[i], rooms[j]] = [rooms[j], rooms[i]];
    }
    setRooms(rooms);
    setLoading(false);
  }

  useEffect(() => {
    randomizeRooms(rooms);
  }, []);

  if (loading) {
    return;
  }

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
