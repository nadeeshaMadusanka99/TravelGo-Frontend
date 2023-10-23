
import { apiSlice } from "./apiSlice";
import { GET_STATIONS_API_URL, GET_SCHEDULE_API_URL, GET_SEATS_API_URL } from "../config";

export const trainApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        getStations: builder.query({
            query: () => ({
                url: GET_STATIONS_API_URL,
                method: 'GET'
            })
        }),
        getTrains: builder.query({
            query: (stationCode) => ({
                url: GET_STATIONS_API_URL + stationCode,
                method: 'GET'
            })
        }),
        getSchedule: builder.mutation({
            query: (data) => ({
                url: GET_SCHEDULE_API_URL,
                method: 'POST',
                body: data
            })
        }),
        getSeats: builder.query({
            query: (data) => ({
                url: GET_SEATS_API_URL,
                method: 'POST',
                body: data
            })
        })
    })
})


export const { useGetStationsQuery, useGetScheduleMutation, useGetSeatsQuery } = trainApiSlice;