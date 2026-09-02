import React, { useEffect, useState } from "react";

const Hello = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
      console.log(users.length)
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Hello;
