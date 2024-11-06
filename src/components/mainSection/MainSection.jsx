import FeatureSection from "../featureSection/FeatureSection"
import Lottie from 'lottie-react';

import animationData from '../../assets/animation/splash_screen.json'

function MainSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 gap-10 flex flex-col lg:flex-row items-center px-6 justify-evenly py-10">
    <div className="gap-5 w-full lg:w-1/4 min-h-[600px] flex flex-col items-center text-white">
        <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
        /> 

        <h1 className="text-5xl font-bold mb-2">TaskWiz</h1> 
        <h2 className="text-xl font-light mb-4">Master Your Day, One Task at a Time.</h2>

        <a href="https://drive.google.com/file/d/16R8gzdH3PRExUlu6nXw-gobXY_tBMtwa/view?usp=sharing" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out">
            Download for Android
        </a>
    </div>
    <FeatureSection/>
</section>

  )
}

export default MainSection