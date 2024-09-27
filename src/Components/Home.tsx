import Lottie, { LottieRefCurrentProps } from "lottie-react"
import multiPlat from '../assets/multiaPlatform.json'
import { useRef } from "react"
const Home = () => {
    const multiPlatAnimation = useRef<LottieRefCurrentProps>(null)
  return (
    <div>
      {/* Multi-platform Animation */}
      <div className=" flex justify-center mt-20 ">
        <Lottie className=""
          onComplete={() => {
            multiPlatAnimation.current?.goToAndPlay(0,true);
          }}
          lottieRef={multiPlatAnimation} 
          loop={true} 
          animationData={multiPlat}  // Fix: Correct prop for Lottie
        />
        <div className="space-y-5">
          <h1 className="font-bold mb-2 text-2xl">Build your Cross-Platform Application</h1>
        <p>"Reach a wider audience with a single codebase! <br /> Our cross-platform app development services ensure your app   <br />  looks and feels great on iOS, Android, and the web,  <br /> saving you time and money."</p>
        <button className="rounded p-2 border hover:border-collapse hover:bg-black hover:text-white">View Projects</button>
        </div>
        
      </div>
    </div>
  )
}

export default Home
