import { AxiosError } from "axios";
import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getLocations, LocationsData } from "../operations/locations";

//useLocationQuery
type LocationQueryOptions = {
    options?: Omit<UseInfiniteQueryOptions<LocationsData, AxiosError>,
    'queryKey' | 'queryFn'
    >;
};

export function useLocationQuery({
    options = {
        getNextPageParam: (lastPage) => {
            const nextUrl = lastPage.info.next;
            if (nextUrl) {
                return Number(nextUrl.charAt(nextUrl.length - 1));
            }
            return false;
        },
    },
}: LocationQueryOptions) {
    return useInfiniteQuery(
        ['locations'],
        ({ pageParam = 1 }) => getLocations({ page: pageParam}),
        options
    );
}