import React, { Suspense } from "react";
import {client} from "@/sanity/lib/client";
import {STARTUP_BY_ID_QUERY} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/ui/TotalView";
// import markdownit from 'markdown-it'

export const experimental_ppr = true;

const Page = async ({params} : {params : Promise<{ id:string}>}) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY,{id});
    if(!post) return notFound()
    // const parsedContent = md.render(post.pitch || '');
  return (
      <>
        <section className="w-full bg-[#ee2a69] min-h-[230px] pattern flex justify-center items-center flex-col py-10 px-6 ">
            <p className="bg-[#fae840] px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri">{formatDate(post?._createdAt)} </p>
            <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5"> {post.title}</h1>
            <p className="font-medium text-[20px] text-white max-w-5xl text-center break-words ">{post.description}</p>
        </section>
        <section className="px-6 py-10 max-w-7xl mx-auto">
           <Image
          src={post.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
          width={400}
          height={400}
            />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
           <div className="flex justify-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author.username}
                </p>
              </div>
            </Link>

            <p className="font-medium text-[16px] bg-[#c7b8bc] px-4 py-2 rounded-full align-center">{post.category}</p>
          </div>
          <h3 className="text-30 font-bold"> Pitch Details </h3>
        </div>

        <Suspense fallback={<Skeleton className="bg-zinc h-10 w-24 rounded-lg fixed bottom-3 right-3"/>}>
            <View id={id} />
        </Suspense>
        </section>
      </>
    )
}

export default Page;

