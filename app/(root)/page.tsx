import Image from "next/image";
import SearchFrom from "../../components/ui/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {

    const query = (await searchParams).query;
  return (
    <>
      <section className="w-full bg-[#ef2a69] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6;">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">Pitch Your StartUp, Connect with Entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
          Submit ideas, vote on Pitches, and Get Noticed in Virtual Competitions
        </p> 
            <SearchFrom query = {query}/>

      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="text-[30px] font-semibold" >
            {query ? `Search results for ${query}`: "All Startups"}
        </p>
      </section>
      <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">

      </ul>

    </>
  )
}
