import { useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(false);

  const totalVideo = 4;
  const nextVideoRef = useRef(null);
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;
  const upComingVideo = (currentIndex % totalVideo) + 1;

  const handelMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upComingVideo);
  };
  const handelVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  useEffect(()=>{
if(loadedVideos=== totalVideo-1 ){
    setIsLoading(false)
}
  },[loadedVideos])

  //-------------------- Animation -----------------
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          ease: "power1.inOut",
          duration: 1.5,
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0,90% 90% ,0% 100% )",
      borderRadius: "0 0  40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0,100% 100% ,0% 100% )",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center  absolute z-[100] h-dvh w-screen overflow-hidden  bg-violet-50 ">
          <div className="three-body">
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
              
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
            <div
              onClick={handelMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all ease-in hover:scale-100 hover:opacity-100 duration-500"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upComingVideo)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale object-cover object-center"
                onLoadedData={handelVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute absolute-center invisible z-20 size-64 object-cover object-center"
            onLoadedData={handelVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideo - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0  size-full object-cover object-center "
            onLoadedData={handelVideoLoad}
          />
        </div>
        <h1
          className="special-font  hero-heading  absolute bottom-5 text-blue-75 z-40
        right-5 "
        >
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0  size-full z-40 ">
          <div className="mt-24 px-5 sm:px-10   ">
            <h1 className="special-font hero-heading text-blue-100 ">
              redefi<b>n</b>e
            </h1>
            <p className=" max-w-64 font-robert-regular leading-5  text-blue-100">
              Enter the Metagame layer
              <br />
              Unleash the play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1
        className="special-font  hero-heading  absolute bottom-5 text-black
        right-5 "
      >
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
