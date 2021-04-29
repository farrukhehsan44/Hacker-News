import React, { useState, useEffect, memo } from "react";
import Comment from "./Comment";
import { getStory } from "./Services/api";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const [commentId, setCommentId] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
    getStory(storyId).then((data) => data && setCommentId(data?.kids));
  }, []);
  return story && story.url ? (
    <div className="w-full mt-3 flex flex-col justify-center bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4">
        <div className="uppercase text-lg text-gray-600 font-bold">Story</div>
        {story.title}
        <div className="text-sm font-bold">by: {story.by}</div>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-600 font-bold">
          Comments
        </div>
      </div>
      {commentId?.slice(0, 20).map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </div>
  ) : null;
};

export default Story;
