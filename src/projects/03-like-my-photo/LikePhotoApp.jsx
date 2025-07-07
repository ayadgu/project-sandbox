import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillHeart,
  AiFillSmile,
  AiOutlineComment,
  AiOutlineHeart,
} from "react-icons/ai";
import Dogydog from "./img/dog.jpg";

export default function LikePhotoApp() {
  //   let like = useState(false)[0];
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="container text-center">
      <Title classes={"mb-3"} text={"Like My Photo App"} />
      <Title classes={" subtitle"} text={`${count} Likes`} />
      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: "pointer" }}
      ></div>
      <div className="card-header fs-xl">
        <AiFillSmile
          className="mr-2"
          style={{ color: "var(--primary-color)" }}
        ></AiFillSmile>
        <small>Dogydog</small>
        <img
          onDoubleClick={() => {
            setLike(!like);
            setCount(like ? count - 1 : count + 1);
          }}
          src={Dogydog}
          alt="img"
          style={{ width: 100, height: "fit-content" }}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment></AiOutlineComment>
          {like ? (
            <AiFillHeart
              className="text-danger"
              onClick={() => {
                setLike(!like);
                setCount(count - 1);
              }}
            ></AiFillHeart>
          ) : (
            <AiOutlineHeart
              onClick={() => {
                setLike(!like);
                setCount(count + 1);
              }}
            ></AiOutlineHeart>
          )}
        </div>
      </div>
    </div>
  );
}
