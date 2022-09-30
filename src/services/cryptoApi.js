import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
        'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
// vaishakk.web
// 'X-RapidAPI-Key': 'da0d128adbmshc4f514550d870c4p1b9ef9jsne3096fc4e9aa',
// 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;