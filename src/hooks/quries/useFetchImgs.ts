'use client'

import fetchImages from "@/api/fetchImages"
import { ParsedImage } from "@/api/parser/imgParsers";
import { unsplashImage } from "@/interfaces/img-interface"
import { useInfiniteQuery } from "@tanstack/react-query"

const useFetchImgs = () => {
    return useInfiniteQuery<ParsedImage[], Error>({
        queryKey: ['imgs'],
        queryFn: ({pageParam}) => fetchImages(pageParam as number),
        initialPageParam:1,
        getNextPageParam: (lastPage, allPages) => {
            // Stop fetching if last page returned fewer than 20 items
            if (lastPage.length < 20) return undefined;
            return allPages.length + 1; // next page number
        },
    });
};


export default useFetchImgs


