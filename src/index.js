import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Hey there!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 6:45AM"
        comment="How are you doing. I love your post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Marcus"
        timeAgo="Today at 2:45PM"
        comment="D Wade is the best Basketball player!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
