import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const deliveryApi = createApi({
  reducerPath: 'deliveryApi',
  baseQuery: fetchBaseQuery({ baseUrl: './data' }),
  endpoints: (builder) => ({
    getAllShops: builder.query({
      query: () => `/delivery.json`,
    }),
  }),
})

export const { useGetAllShopsQuery } = deliveryApi