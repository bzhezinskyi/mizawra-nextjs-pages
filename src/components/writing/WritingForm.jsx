import { useRouter } from "next/router";
import { useState } from "react";
import { FaDotCircle } from "react-icons/fa";

import useDate from "@/hooks/useDate";
import WritingCategoryModal from "./WritingCategoryModal";

export default function WritingForm() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const date = useDate();
  const { category } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        const uppercase = value.toUpperCase();
        setTitle(uppercase);
        break;
      case "text":
        setText(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const narrative = { title, text, date, category };
    console.log(narrative);
    setTitle("");
    setText("");
  };

  const handleCategoryChange = () => {
    setOpenModal(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="py-16 px-52 mb-12 w-full writing-form rounded-3xl">
        <button
          type="button"
          className="absolute top-11 right-14"
          onClick={handleCategoryChange}
        >
          <FaDotCircle className={` writing-circel ${category}`} />
        </button>
        <form onSubmit={handleSubmit} className="h-full" id="writing-form">
          <div className="flex mb-16">
            <input
              className="block w-full p-1 mr-24"
              name="title"
              type="text"
              value={title}
              placeholder="TITLE"
              onChange={handleChange}
              required
            />

            <span>{date}</span>
          </div>
          <textarea
            className="block w-full  p-1 resize-none writing-form__text"
            name="text"
            type="text"
            value={text}
            placeholder="Start typing here..."
            onChange={handleChange}
            required
          />
        </form>
      </div>
      <button
        type="submit"
        form="writing-form"
        className="px-7 py-4  rounded-3xl btn"
      >
        Save + Exit
      </button>
      <div className={`${openModal ? "" : "hidden"}`}>
        <WritingCategoryModal setOpenModal={setOpenModal} />
      </div>
    </div>
  );
}
