import Footer from "./Footer"
import { useRef } from "react"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import animationData from '../assets/Animation - 1727279410345.json'
import slide from '../assets/slide.json'
import baseline from '../assets/baseline.json'
import drop from '../assets/Animation - 1727277659435.json'
import Home from "./Home"


const LandingPage = () => {
  const circleAnimation = useRef<LottieRefCurrentProps>(null)
  const slideAnimation = useRef<LottieRefCurrentProps>(null)
  const baseLineAnimation = useRef<LottieRefCurrentProps>(null)
  const dropAnimation = useRef<LottieRefCurrentProps>(null)

  return (
    <div className="overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full bg-transparent z-30">
        <div className="logo flex space-x-1 items-center p-4">
          <img src="3-removebg-preview.png" className="w-10" alt="logo" />
          <div>
            <h1 className="font-bold text-black">PARAS</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-end relative top-0 right-0 z-20">
        <Lottie
          onComplete={() => {
            circleAnimation.current?.goToAndPlay(10, true);
          }}
          lottieRef={circleAnimation}
          loop={false}
          animationData={animationData}
        />
      </div>

      <div className="absolute top-0 left-10 z-20">
        <div className="content absolute lg:top-56 lg:left-40 sm:top-20 sm:left-0">
          <h1 className="lg:text-9xl sm:text-8xl md:text-9xl font-bold">WELCOME</h1>
          <button className="border p-3 rounded-lg hover:bg-black hover:text-white">Explore</button>
        </div>
      </div>

      <Lottie
        className="absolute top-40 left-0 z-0"
        onComplete={() => {
          baseLineAnimation.current?.goToAndPlay(0, true);
        }}
        lottieRef={baseLineAnimation}
        loop={true}
        animationData={baseline}
      />



      <div className="relative z-10 mt-10">
      <Home />
      <Lottie onComplete={() => {dropAnimation.current?.goToAndPlay(0, true);}}lottieRef={dropAnimation} loop={true} animationData={drop}/>
      </div>











      <div>
      <Footer />
      <Lottie
        className="relative bottom-0 left-0 w-full"
        onComplete={() => {
          slideAnimation.current?.goToAndPlay(0, true);
        }}
        lottieRef={slideAnimation}
        loop={true}
        animationData={slide}
      />
      </div>
      
    </div>
  )
}

export default LandingPage
