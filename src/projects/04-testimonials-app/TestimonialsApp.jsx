import React, { useEffect } from "react";
import Title from "../components/Title";
import Button from "./Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
  const [testimonials, setTestimonials] = React.useState("posts");
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    if (testimonials) {
      fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }
  }, [testimonials]);

  const testimonialConfig = {
    posts: {
      titleKey: "title",
      bodyKey: "body",
    },
    users: {
      titleKey: "name",
      bodyKey: "email",
    },
    comments: {
      titleKey: "name",
      bodyKey: "body",
    },
  };

  const renderItem = (item) => {
    const config = testimonialConfig[testimonials];
    if (!config) return null;

    return (
      <div className="card card-primary mb-2" key={item.id}>
        <h4 className="card-header">{item[config.titleKey]}</h4>
        <div className="card-body">
          <p className="card-text">{item[config.bodyKey]}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container m-auto">
      <Title classes={"mb-3"} text={"Testimonials App"} />
      <Button
        text={"Posts"}
        icon={<BsFillFileEarmarkPostFill />}
        btnClass={testimonials === "posts" ? "btn-primary" : "btn-info"}
        onClick={() => setTestimonials("posts")}
      />
      <Button
        text={"Users"}
        icon={<FaUserAlt />}
        btnClass={testimonials === "users" ? "btn-primary" : "btn-info"}
        onClick={() => setTestimonials("users")}
      />
      <Button
        text="Comments"
        icon={<BiCommentDetail />}
        btnClass={testimonials === "comments" ? "btn-primary" : "btn-info"}
        onClick={() => setTestimonials("comments")}
      />
      <Title
        classes={"subtitle text-primary mt-5"}
        text={
          !testimonials
            ? "Select a category"
            : testimonials.charAt(0).toUpperCase() + testimonials.slice(1)
        }
      />
      {items && items.length > 0
        ? items.map((item) => renderItem(item))
        : "No items found"}
    </div>
  );
}
