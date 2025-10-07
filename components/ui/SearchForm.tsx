import React from "react";
import Form from 'next/form'
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

export const SearchFrom =({query}:{query?:string}) =>{
        
    return(
        <Form action='/' scroll={false} className="search-form">
            <input
                name='query'
                defaultValue={query}
                className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none"
                placeholder="Search Startups"
            />
            <div className="flex gap-2">
                {query && <SearchFormReset/>}
                <button type="submit" className="size-[50px] rounded-full bg-black flex justify-center items-center !important text-white">
                    <Search />
                </button>
            </div>
        </Form>
    )
}

export default SearchFrom;
