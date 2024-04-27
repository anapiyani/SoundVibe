type TUrl = {
    url: string;
}
type TAlbum = {
    images: [TUrl]
    name: string;
    release_date: string;
    total_tracks: number;
}

type TArtist = {
    name: string
}

export type TSongs = {
    name: string;
    isLiked: false,
    Play: false,
    album: TAlbum,
    artists: TArtist[],
    preview_url: string;
    uri: string;
    explicit: boolean;
}
