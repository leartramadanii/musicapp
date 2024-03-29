import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/',
            prepareHeaders: (headers) => {
                headers.set( 'X-RapidAPI-Key','d850c9b5b8msh2c2057bd615585cp1b18d2jsn09ee906ce0ba');
                
                return headers
            },
        }),
        endpoints: (builder) => ({
        getTopCharts: builder.query({ query : () => 'v1/charts/world' }),
        getSongDetails: builder.query({ query: ( {songid} ) => `v1/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: ( artistId ) => `v2/artists/details?artist_id=${artistId}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `v2/charts/country?country_code=${countryCode}` }),
        getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsByGenreQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreApi;