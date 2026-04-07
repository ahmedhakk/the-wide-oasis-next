"use client";
import React, { useState } from "react";
export default function Counter({
  users,
}: {
  users: { id: string; login: string }[];
}) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <>
      <p>Number of users: {users.length}</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </>
  );
}
