
import { apiSlice } from "./apiSlice";
import { GET_STATIONS_API_URL } from "../config";

export const trainApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStations: builder.query({
            query: () => ({
                url: GET_STATIONS_API_URL,
                method: 'GET'
            })
        })
    })
})


export const { useGetStationsQuery } = trainApiSlice;