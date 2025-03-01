import { useEffect, useState } from "react";

const PropChangedEffect = ({ userID }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userID]);
  return (
    <div>
      <h2>User Details</h2>
      {user ? <p>{user?.name}</p> : <p>Loading....</p>}
    </div>
  );
};

export default PropChangedEffect;
