import Lottie , {LottieRefCurrentProps} from "lottie-react"
import buildData from '../assets/build.json'
import { useRef } from "react"
const Featured = () => {
    const buildAnimation = useRef<LottieRefCurrentProps>(null)
  return (
    <div>
        <Lottie onComplete={() => {
            buildAnimation.current?.goToAndPlay(10, true);
          }} lottieRef={buildAnimation} 
          loop={false} 
          animationData={buildData}  />
    </div>
  )
}

export default Featured
