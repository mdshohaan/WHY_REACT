import { useEffect, useState } from "react";

const Basics = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h2>FETCHED DATA</h2>
      {data ? <p>{data?.title}</p> : <p>Loading......</p>}
    </div>
  );
};

export default Basics;
