import { axiosInstance } from "../api";
import { PaginatedResponse } from "../api";
import { Location } from "../models/location";

//getLocations
export interface LocationsVar {
    page: number
}

export type LocationsData = PaginatedResponse<Location>;

export async function getLocations({ page }: LocationsVar) {
    const { data } = await axiosInstance.get<LocationsData>(
        '/Location/?page=${page' ,
    );
    return data;
}