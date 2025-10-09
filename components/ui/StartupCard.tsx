import { formatDate } from "@/lib/utils";
import React from "react";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author}

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li
      className="
        bg-white border-[5px] border-black py-6 px-5 rounded-[22px] 
        shadow-[8px_8px_0_rgba(0,0,0,1)] 
        hover:border-primary transition-all duration-500 
        group
      "
    >
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white">
          {formatDate(_createdAt)}
        </p>

        <div className="flex gap-1.5 items-center">
          <EyeIcon className="size-6 text-primary" />
          <span className="font-medium text-[16px] text-black">{views}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="font-medium text-[16px] text-black truncate">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="font-semibold text-[26px] text-black truncate">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
            <Image src= 'https://placehold.co/48x48' alt ='placeholder' width={48} height={48} className="rounded-full"/>
        </Link>
      </div>
        <Link href={`/startup/${_id}`}>
            <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">
            {description}
            </p>
            <Image src={image ?? 'https://placehold.co/400x400'} alt='placeholder' className="w-full h-[164px] rounded-[10px] object-cover" width={400} height={400}/>
        </Link>
        <div className="flex justify-between gap-3 mt-5">
            <Link href={`/?query=${category?.toLowerCase()}`}>
                <p className="text-16 font-medium">{category}</p>
            </Link>
            <button className="rounded-full bg-black font-medium text-[16px] text-white px-5 py-3 ">
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </button>
        </div>
    </li>
  );
};

export default StartupCard;
