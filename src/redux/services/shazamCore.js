import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
  prepareHeaders: (headers) => {
    headers.set(
      'x-rapidapi-key',
      '56bf2b76ddmshf539c75ab147110p1de8acjsn1e2bd814b7c7'
    );
    return headers;
  },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),
  }),
});
export const { useGetTopChartsQuery } = shazamCoreApi;
