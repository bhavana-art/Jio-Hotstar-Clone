import React from "react";
import { useEffect, useState } from "react";
const rowOffset = { paddingLeft: "180px" };

const newOnHotstar = [
    "/images/card1.jpg",
    "/images/card8.jpg",
    "/images/card7.jpg",
    "/images/card6.jpg",
    "/images/card5.jpg",
    "/images/card-b1.jpg",
    "/images/card3.jpg",
    "/images/card2.jpg",
];



const cards2 = [
    "/images/card-b1.jpg",
    "/images/card-b2.jpg",
    "/images/card-b3.jpg",
    "/images/card-b4.jpg",
    "/images/card-b5.jpg",
    "/images/card-b6.jpg",
    "/images/card-b7.jpg",
    "/images/card-b8.jpg",
]

const serialCards = [
    "/images/serial1.jpg",
    "/images/serial2.jpg",
    "/images/serial3.jpg",
    "/images/serial4.jpg",
    "/images/serial5.jpg",
    "/images/serial6.jpg",
    "/images/serial7.jpg",
    "/images/serial8.jpg",
];

const movieCards = [
    "/images/movie1.jpg",
    "/images/movie2.jpg",
    "/images/movie3.jpg",
    "/images/movie4.jpg",
    "/images/movie5.jpg",
    "/images/movie6.jpg",
    "/images/card-b1.jpg",
    "/images/movie8.jpg",
    "/images/movie9.jpg",
];

const browseCards = [
    "/images/TV.jpg",
    "/images/Sparks.jpg",
    "/images/Sports.jpg",
    "/images/Movie.jpg",
    "/images/News.jpg",
];

const movieHorrorCards = [
    "/images/horror1.jpg",
    "/images/horror2.jpg",
    "/images/horror3.jpg",
    "/images/horror4.jpg",
    "/images/horror5.jpg",
    "/images/horror6.jpg",
    "/images/horror7.jpg",
    "/images/horror8.jpg",
    "/images/horror9.jpg",
];

function PosterCard({ image, title }) {
    return (

        <div className="group relative h-[215px] w-[162px] shrink-0 hover:z-50">

            <div className="relative h-full w-full overflow-hidden rounded-md bg-transparent transition duration-300 group-hover:scale-105">

                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 block h-full w-full border-0 object-cover p-0 m-0 opacity-100"
                />

            </div>

            <div className="invisible absolute left-1/2 top-[-135px] z-50 min-h-[320px] w-[350px] -translate-x-1/2 scale-95 overflow-hidden rounded-lg bg-[#11131a] opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:scale-110 group-hover:opacity-100">

                <img
                    src={image}
                    alt={title}
                    className="h-[190px] w-full object-cover"
                />

                <div className="p-4">

                    <div className="mb-4 flex gap-2">

                        <button className="h-12 flex-1 rounded-md bg-gray-200 text-sm font-bold text-black">
                            &#9654; Watch Now
                        </button>

                        <button className="h-12 w-12 rounded-md bg-white/10 text-2xl font-semibold text-white">
                            +
                        </button>

                    </div>

                    <p className="mb-2 text-sm font-bold text-gray-200">
                        2013 &bull; U/A 13+ &bull; 2h 23m &bull; Hindi &bull; Action
                    </p>

                    <p className="text-sm font-medium leading-5 text-gray-400">
                        Dreaded gangster Shoaib Khan falls for Jasmine, an aspiring actress. What happens when he learns his closest associate is also in love with her?
                    </p>

                </div>

            </div>

        </div>

    );
}

function BrowseRow() {
    return (

        <div className="pr-5 margin-top-[20px]" style={rowOffset}>

            <h2 className="mb-3 text-2xl font-bold text-gray-100">
                Browse
            </h2>

            <div className="flex gap-5 overflow-x-hidden pb-12">

                {browseCards.map((image, index) => (

                    <div
                        key={image}
                        className="h-[130px] w-[230px] shrink-0 overflow-hidden rounded-lg transition duration-300 hover:scale-105"
                    >

                        <img
                            src={image}
                            alt={`Browse ${index + 1}`}
                            className="h-full w-full object-cover"
                        />

                    </div>

                ))}

            </div>

        </div>

    );
}

function PosterRow({ images, title }) {
    return (

        <div className="relative overflow-visible pr-5" style={rowOffset}>

            {title && (

                <h2 className="mb-3 text-2xl font-bold text-gray-100">
                    {title}
                </h2>

            )}

            <div className="flex gap-5 overflow-visible pt-36 pb-28">

                {images.map((image, index) => (

                    <PosterCard
                        key={`${image}-${index}`}
                        image={image}
                        title={`${title || "Poster"} ${index + 1}`}
                    />

                ))}

            </div>

        </div>

    );
}

export default function Cards() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((err) => console.log(err));

    }, []);

    return (


        <section className="relative z-20 -mt-24 overflow-x-clip bg-black pb-10">

            <div className="overflow-visible bg-gradient-to-b from-black via-black to-[#070707] pt-8">

                <PosterRow
                    title="New on JioHotstar"
                    images={newOnHotstar}
                />

            </div>

            <div className="relative min-h-[520px] w-full overflow-visible bg-[url('/images/bg2.jpg')] bg-contain bg-top bg-no-repeat">

                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

                <div className="absolute bottom-8 left-0 right-0 z-10">

                    <div className="mb-4 flex items-end justify-between pr-8" style={rowOffset}>

                        <div>

                            <h2 className="text-2xl font-bold text-white">
                                Desh Ke Dhurandhar
                            </h2>

                            <p className="mt-1 text-lg font-semibold text-gray-300">
                                Secrets. Spies. Action.
                            </p>

                        </div>

                        <button className="text-lg font-semibold text-blue-300">
                            View All &gt;
                        </button>

                    </div>

                    <PosterRow images={cards2} />

                </div>

            </div>

            <div id="serial-section" className="scroll-mt-10 bg-black pt-16">

                <PosterRow
                    title="Popular Serials"
                    images={serialCards}
                />

            </div>

            <div id="movies-section" className="scroll-mt-10 bg-black pt-12 mt-[20px]">

                <PosterRow
                    title="Movies"
                    images={movieCards}
                />

            </div>
            <div className="bg-black pt-12 mt-[20px]">

                <PosterRow
                    title="HorrorMovies"
                    images={movieHorrorCards}
                />

            </div>
            <div id="categories-section" className="scroll-mt-10 bg-black pt-20 mt-[20px]">

                <BrowseRow />

            </div>


            <div>

                {movies.map((movie) => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>

                        <img
                            src={movie.thumbnail}
                            alt={movie.title}
                        />

                    </div>
                ))}

            </div>

        </section>

    );
}
