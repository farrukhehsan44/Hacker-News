import React, { useEffect, useState } from "react";
import { getStoryIds } from "./Services/api";
import Story from "./Story";

const Home = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);
  return (
    <section className="text-gray-600 body-font">
      {storyIds.slice(0, 10).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </section>
  );
};

export default Home;
