"use client";
import { Newpage } from "@/components/Newpage";
import React, { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [isDark, setWall] = useState(false);
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [journal, setJournal] = useState("");

  const setName = () => setValue("Bat");
  const setAge = () => setValue("13");
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const background = () => setWall(!isDark);

  const saveJournal = () =>
    setJournal(`Student-name: ${username}, Student-age: ${userage}`);

  return (
    <div
      className={`${
        isDark ? "bg-[#18191c] text-white" : "bg-[#4b5371] text-black"
      } p-10 h-screen w-full`}
    >
      <p className="mb-4 text-xl">Value: {value}</p>
      <p className="mb-4 text-xl">Count: {count}</p>
      <p className="mb-4 text-xl">{journal}</p>

      <input
        type="text"
        placeholder="enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mb-4 block w-64"
      />

      <input
        type="number"
        placeholder="enter "
        value={userage}
        onChange={(e) => setUserage(e.target.value)}
        className="border p-2 rounded mb-4 block w-64"
      />

      <div className="flex gap-4 flex-wrap">
        <Newpage text="name" onClick={setName} />
        <Newpage text="age" onClick={setAge} />
        <Newpage text="+1" onClick={increase} />
        <Newpage text="-1" onClick={decrease} />
        <Newpage text="change-background" onClick={background} />
        <Newpage text="save journal" onClick={saveJournal} />
      </div>
    </div>
  );
}
