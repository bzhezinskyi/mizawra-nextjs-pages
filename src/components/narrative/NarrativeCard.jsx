import Link from "next/link";
import { HiOutlineTrash } from "react-icons/hi2";
import { FaCircle } from "react-icons/fa";

import { roboto_flex } from "@/styles/fonts";
import useModal from "@/store/useModal";

export default function NarrativeCard({ details }) {
  const { openModal, addData } = useModal();
  return (
    <li className="w-96 ">
      <Link
        href={`${details.id}`}
        className={`block m-3 p-9 rounded-3xl card ${details.category}`}
      >
        <div className="mb-8 flex justify-between items-center">
          <h3 className="text-lg font-medium uppercase ">{details.title}</h3>
          <FaCircle className="w-5 h-5 fill-inherit" />
        </div>
        <p
          className={`${roboto_flex.className} h-20 mb-7 overflow-hidden text-xl `}
        >
          {details.text}
        </p>
        <div className="flex justify-between">
          <span className="text-xl font-medium">{details.date}</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addData(details);
              openModal();
            }}
          >
            <HiOutlineTrash className="w-6 h-6" />
          </button>
        </div>
      </Link>
    </li>
  );
}
