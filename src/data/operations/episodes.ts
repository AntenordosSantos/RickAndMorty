import { axiosInstance } from "../api";
import { PaginatedResponse } from "../api";
import { Episode } from "../models/episode";

//getEpisodes

export interface EpisodesVar {
    page: number;
}

export type EpisodeData = PaginatedResponse<Episode>;

export async function getEpisodes({
    page,
}: EpisodesVar): Promise<EpisodeData> {
    const { data } = await axiosInstance.get<EpisodeData>(
        '/episode?page=${page}',
    );
    return data;
}