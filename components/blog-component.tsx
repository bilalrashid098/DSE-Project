"use client";
import moment from "moment";

export const BlogComponent = ({ data }: any) => {
  const { title, text, author, date } = data;
  return (
    <div className="blog flex items-center mb-[4rem] border-b-2 border-gray-200 pb-[4rem]">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-sm">{text}</p>
        <div className="flex items-center">
          <span className="inline-block px-3 py-2 text-sm font-semibold leading-none text-gray-900 bg-gray-200 rounded-full me-2 my-3">{author}</span>
          <span className="inline-block px-3 py-2 text-sm font-semibold leading-none text-gray-900 bg-gray-200 rounded-full me-2 my-3">{moment(date).format("DD MMM YYYY")}</span>
        </div>
      </div>
    </div>
  );
};
