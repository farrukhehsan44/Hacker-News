import React, { useState, useEffect, memo } from "react";
import { getComment } from "./Services/api";

const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    getComment(commentId).then((data) => data && setComment(data));
  }, []);
  return comment && comment.text ? (
    <div>
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="border rounded-lg p-4 bg-gray-200">
          {comment.text}
          <p className="font-bold text-sm">by: {comment.by}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Comment;
