import React, { useEffect, useRef, useState } from "react";
import bannerData from "./bannerData";

function Banner() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const [scrollOpacity, setScrollOpacity] = useState(0);

    // Current Banner
    const currentBanner = bannerData[currentIndex];


    // Show video after 5 sec
    useEffect(() => {

        setShowVideo(false);

        const timer = setTimeout(() => {

            setShowVideo(true);

        }, 9000);

        return () => clearTimeout(timer);

    }, [currentIndex]);

    useEffect(() => {

        if (showVideo && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch((error) => {
                console.log("Video autoplay failed:", error);
            });
        }

    }, [showVideo, currentIndex]);

    useEffect(() => {

        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }

    }, [isMuted]);

    // Auto Slide Banner
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentIndex((prev) =>
                prev === bannerData.length - 1
                    ? 0
                    : prev + 1
            );

        }, 25000);

        return () => clearInterval(interval);

    }, []);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            const opacity = Math.min(window.scrollY / 400, 0.75);
            setScrollOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div className="relative h-screen w-full overflow-hidden">

            {/* IMAGE FIRST */}
            {!showVideo ? (

                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{
                        backgroundImage: `url(${currentBanner.image})`,
                    }}
                />

            ) : (

                // VIDEO AFTER 5 SEC
                <video
                    ref={videoRef}
                    key={currentBanner.id}
                    autoPlay
                    muted={isMuted}
                    playsInline
                    preload="auto"
                    poster={currentBanner.image}
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                >

                    <source
                        src={currentBanner.video}
                        type="video/mp4"
                    />

                </video>

            )}

            {showVideo && (

                <button
                    onClick={() => setIsMuted((prev) => !prev)}
                    className="absolute right-10 top-10 z-30 rounded-lg bg-black/60 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-black/80 transition"
                >

                    {isMuted ? "Unmute" : "Mute"}

                </button>

            )}



            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

            <div
                className="absolute inset-0 bg-black z-10 pointer-events-none transition-opacity duration-300"
                style={{ opacity: scrollOpacity }}
            />
            {/* CONTENT */}
            <div className="absolute z-20 left-[170px] top-0 h-full  flex flex-col justify-center max-w-[520px] text-white">

                {/* SUBTITLE */}
                <p className="text-[#1f9bff] text-base font-semibold mb-5">

                    {currentBanner.subtitle}

                </p>

                {/* TITLE */}
                {currentBanner.icon ? (

                    <img
                        src={currentBanner.icon}
                        alt={currentBanner.title}
                        className="w-56 max-w-full object-contain mb-4"
                    />

                ) : (

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">

                        {currentBanner.title}

                    </h1>

                )}

                {/* INFO */}
                <div className="hidden">

                    <span>{currentBanner.year}</span>
                    <span>•</span>

                    <span>{currentBanner.age}</span>
                    <span>•</span>

                    <span>{currentBanner.duration}</span>
                    <span>&bull;</span>

                    <span>{currentBanner.language}</span>

                </div>

                <div className="flex items-center gap-2 text-gray-200 text-lg font-bold mb-6">
                    <span>{currentBanner.year}</span>
                    <span>&bull;</span>
                    <span>{currentBanner.age}</span>
                    <span>&bull;</span>
                    <span>{currentBanner.duration}</span>
                    <span>&bull;</span>
                    <span>{currentBanner.language}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-200 text-lg font-semibold leading-8 mb-7">

                    {currentBanner.description}

                </p>

                {/* CATEGORY */}
                <p className="text-gray-100 text-lg font-bold mb-11">

                    {currentBanner.category}

                </p>

                {/* BUTTONS */}
                <div className="flex items-center gap-4">

                    <button className="h-[52px] min-w-[348px] rounded-lg bg-gradient-to-r from-[#1499ff] to-[#e0007a] text-[0px] font-bold flex items-center justify-center gap-3 hover:scale-105 transition">

                        <span className="text-2xl leading-none">&#9654;</span>
                        <span className="text-xl">Subscribe to Watch</span>

                        ▶ Watch Now

                    </button>

                    <button className="w-[52px] h-[52px] rounded-lg bg-white/20 text-3xl flex items-center justify-center hover:bg-white/30 transition">

                        +

                    </button>

                </div>

            </div>

            {/* THUMBNAILS */}
            <div className="absolute bottom-10 right-10 flex gap-3 z-20">

                {bannerData.map((banner, index) => (

                    <img
                        key={banner.id}
                        src={banner.thumbnail}
                        alt={banner.title}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-28 h-16 rounded-lg object-cover cursor-pointer transition duration-300
                        
                        ${currentIndex === index
                                ? "border-2 border-white scale-110"
                                : "opacity-70 hover:opacity-100"
                            }
                        `}
                    />

                ))}

            </div>

        </div>
    );
}

export default Banner;
