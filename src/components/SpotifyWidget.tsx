"use server";

import Image from "next/image";
import type { SimplifiedArtist } from "spotify-types";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? "";
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN ?? "";

function getBasicAuthHeader() {
    return (
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")
    );
}

async function refreshAccessToken() {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: getBasicAuthHeader(),
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN,
        }),
    });
    if (!response.ok) {
        throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
}

async function getLastListenedTo(limit: number) {
    const accessToken = await refreshAccessToken();
    const response = await fetch(
        `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );

    if (!response.ok) {
        throw new Error(
            `Failed to get recently played: ${response.statusText}`,
        );
    }

    const data = await response.json();
    return data.items[0];
}

export async function SpotifyWidget() {
    try {
        const song = await getLastListenedTo(1);
        const track = song.track;

        return (
            <div className="bg-background-light-secondary dark:bg-background-dark-secondary flex flex-row gap-5 rounded-full px-2 py-2 lg:max-w-1/2">
                <a
                    href={track.album.external_urls.spotify ?? ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                >
                    <Image
                        className="block dark:hidden"
                        src="/icons/Spotify_Primary_Logo_RGB_Black.png"
                        alt="Spotify Black Logo"
                        width={48}
                        height={48}
                    />
                    <Image
                        className="hidden dark:block"
                        src="/icons/Spotify_Primary_Logo_RGB_White.png"
                        alt="Spotify Black Logo"
                        width={48}
                        height={48}
                    />
                </a>

                <div className="flex flex-col justify-between overflow-hidden">
                    <p className="pr-2 text-xs leading-none">
                        Last listened to
                    </p>
                    <div className="flex flex-col">
                        <a
                            href={track.external_urls.spotify ?? ""}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-dark-primary dark:text-text-light-primary overflow-hidden pr-2 text-sm font-semibold text-nowrap text-ellipsis hover:underline"
                        >
                            {track.name}
                        </a>
                        <span className="text-text-dark-secondary dark:text-text-light-secondary overflow-hidden pr-3 text-xs font-medium text-ellipsis whitespace-nowrap">
                            {track.artists.map(
                                (artist: SimplifiedArtist, idx: number) => (
                                    <span key={idx}>
                                        <a
                                            href={
                                                artist.external_urls.spotify ??
                                                ""
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            {artist.name}
                                        </a>
                                        {idx < track.artists.length - 1 && ", "}
                                    </span>
                                ),
                            )}
                        </span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}
