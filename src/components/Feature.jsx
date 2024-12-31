import { useRef, useState } from "react";
import { TiLocation, TiLocationArrow } from "react-icons/ti";
const BentoTilt =({children , className=""})=>{
    const [transformStyle, setTransformStyle] = useState("")
    const itemRef = useRef();
    const handleMouseMove =(e)=>{
    if(!itemRef.current) return;
    const {left,width,top,height}=itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX-left)/width;
    const relativeY = (e.clientY-top)/height;
    const tiltX = (relativeY-0.5) * 5; 
    const tiltY = (relativeX-0.5)* -5; 
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    
    setTransformStyle(newTransform)

    }

    const handleMouseLeave =()=>{
        setTransformStyle("")
    }

return(
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transformStyle}} > 

        {children}
    </div>

)
}

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className=" relative size-full text-blue-50">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex  size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3  max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section className="bg-black pb-12 text-white ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into The Meta Game layer
          </p>
          <p className="max-w-md  font-circular-web text-blue-50  text-lg opacity-50 ">
            Immerse yourself in a Rich and ever expanding univere where a
            vibrant array of product converge into and inter connected overlay
            experience on your world.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96  w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon={true}
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ">
          <BentoTilt className="bento-tilt_1  row-span-1  md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1  ms-32  md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  N<b>ex</b>us
                </>
              }
              description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1    md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  A<b>zu</b>al
                </>
              }
              description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2 ">
            <div className="flex size-full  flex-col justify-between  bg-violet-300  p-5 ">
              <h1 className="bento-title special-font max-w-64  text-black ">
                M<b>o</b>re Coming S<b>oo</b>n!
              </h1>
              <TiLocationArrow className="m-5  scale-[5] self-end text-black" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2 ">
            <video
            src="/videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Feature;
