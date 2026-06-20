import { useState } from "react";
import Banner from "./banner";
import Cards from "./Cards";

import {
    HiHome,
} from "react-icons/hi";

import {
    FaSearch,
} from "react-icons/fa";

import {
    PiTelevisionSimple,
} from "react-icons/pi";

import {
    MdMovie,
} from "react-icons/md";

import {
    BiCategoryAlt,
} from "react-icons/bi";

import {
    CgProfile,
} from "react-icons/cg";

const searchSerials = [
    "/images/serial1.jpg",
    "/images/serial2.jpg",
    "/images/serial3.jpg",
    "/images/serial4.jpg",
    "/images/serial5.jpg",
    "/images/serial6.jpg",
    "/images/serial7.jpg",
    "/images/serial8.jpg",
];

const searchMovies = [
    "/images/movie1.jpg",
    "/images/movie2.jpg",
    "/images/movie3.jpg",
    "/images/movie4.jpg",
    "/images/movie5.jpg",
    "/images/movie6.jpg",
    "/images/movie7.jpg",
    "/images/movie8.jpg",
];

function SearchPosterRow({ title, images }) {
    return (

        <section className="mt-12">

            <h2 className="mb-4 text-2xl font-bold text-white">
                {title}
            </h2>

            <div className="grid grid-cols-2  gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">

                {images.map((image, index) => (

                    <div
                        key={`${title}-${image}-${index}`}
                        className="h-[216px] overflow-hidden rounded-md bg-zinc-900 transition duration-300 hover:scale-105"
                    >

                        <img
                            src={image}
                            alt={`${title} ${index + 1}`}
                            className="h-full w-full object-cover"
                        />

                    </div>

                ))}

            </div>

        </section>

    );
}

function SearchPage() {
    return (

        <div className="min-h-screen bg-[#0f1016] py-8 pr-8">

            <div style={{ marginLeft: "180px", width: "calc(100% - 180px)" }}>

                <div className="flex h-[66px] w-full max-w-6xl items-center gap-6 rounded-lg bg-[#252936] px-6 text-gray-400">

                    <FaSearch className="text-3xl text-white" />

                    <input
                        type="text"
                        placeholder="Movies, shows and more"
                        className="h-full flex-1 bg-transparent text-2xl font-semibold text-white outline-none placeholder:text-gray-400"
                    />

                </div>

                <div className="max-w-6xl">

                    <SearchPosterRow
                        title="Trending in India"
                        images={searchSerials}
                    />

                    <SearchPosterRow
                        title="Movies"
                        images={searchMovies}
                    />

                </div>

            </div>

        </div>

    );
}

function Home() {

    const [activePage, setActivePage] = useState("home");

    const goToSection = (sectionId) => {
        setActivePage("home");

        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 0);
    };

    const handleNavClick = (name) => {
        if (name === "Search") {
            setActivePage("search");
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (name === "TV") {
            goToSection("serial-section");
            return;
        }

        if (name === "Movies") {
            goToSection("movies-section");
            return;
        }

        if (name === "Categories") {
            goToSection("categories-section");
            return;
        }

        setActivePage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navItems = [
        { name: "Home", icon: <HiHome className="text-2xl" /> },
        { name: "Search", icon: <FaSearch className="text-2xl" /> },
        { name: "TV", icon: <PiTelevisionSimple className="text-2xl" /> },
        { name: "Movies", icon: <MdMovie className="text-2xl" /> },
        { name: "Categories", icon: <BiCategoryAlt className="text-2xl" /> },
        { name: "My Space", icon: <CgProfile className="text-2xl" /> },
    ];

    return (

        <div className="bg-black text-white flex min-h-screen">

            {/* SIDEBAR */}
            <div className="group w-[90px] bg-black/80 backdrop-blur-md h-screen fixed left-0 top-0 z-50 flex flex-col items-center gap-10 py-6">

                <div className="invisible absolute left-0 top-0 z-20 h-screen w-[230px] bg-gradient-to-r from-black via-black/95 to-black/70 opacity-0 backdrop-blur-md transition duration-300 group-hover:visible group-hover:opacity-100">

                    <div className="pt-10 pl-7">

                        <img
                            src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
                            alt="logo"
                            className="w-16"
                        />

                    </div>

                    <div className="mt-20 flex flex-col gap-9 pl-8">

                        {navItems.map((item) => (

                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.name)}
                                className="flex items-center gap-7 text-gray-400 transition hover:text-white"
                            >

                                {item.icon}
                                <span className="text-xl font-bold">{item.name}</span>

                            </button>

                        ))}

                    </div>

                </div>

                {/* LOGO */}
                <div className="relative z-10 pt-4 transition duration-200 group-hover:opacity-0">

                    <img
                        src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
                        alt="logo"
                        className="w-16"
                    />

                </div>

                {/* NAVBAR */}
                <nav className="relative z-10 flex flex-col gap-8 mt-20 transition duration-200 group-hover:opacity-0">

                    <button
                        onClick={() => handleNavClick("Home")}
                        className="flex items-center gap-4 hover:scale-110 transition"
                    >

                        <HiHome className="text-2xl" />

                    </button>

                    <button
                        onClick={() => handleNavClick("Search")}
                        className="flex items-center gap-4 hover:scale-110 transition"
                    >

                        <FaSearch className="text-2xl" />

                    </button>

                    <button
                        onClick={() => handleNavClick("TV")}
                        className="flex items-center gap-4 hover:scale-110 transition"
                    >

                        <PiTelevisionSimple className="text-2xl" />

                    </button>

                    <button
                        onClick={() => handleNavClick("Movies")}
                        className="flex items-center gap-4 hover:scale-110 transition"
                    >

                        <MdMovie className="text-2xl" />

                    </button>

                    <button
                        onClick={() => handleNavClick("Categories")}
                        className="flex items-center gap-4 hover:scale-110 transition"
                    >

                        <BiCategoryAlt className="text-2xl" />

                    </button>

                    <button
                        onClick={() => handleNavClick("My Space")}
                        className="flex items-center gap-4 hover:scale-110 transition"
                    >

                        <CgProfile className="text-2xl" />

                    </button>

                </nav>

            </div>

            {/* RIGHT SECTION */}
            <div className="ml-[90px] flex-1">

                {activePage === "search" ? (

                    <SearchPage />

                ) : (

                    <>
                        <Banner />
                        <Cards />
                    </>

                )}

            </div>

        </div>

    );
}

export default Home;
