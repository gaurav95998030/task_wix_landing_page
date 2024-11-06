
import Lottie from 'lottie-react';
import animationData from '../../assets/animation/wallgenius.json';

function MainSection() {
    return (
        <section className="w-full min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 gap-10 flex flex-col lg:flex-row items-center px-6 justify-evenly py-10">
            <div className="gap-5 w-full lg:w-1/4 min-h-[600px] flex flex-col items-center text-white">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                />

                <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">Wall Genius</h1>
                <h2 className="text-xl font-light mb-4 text-gray-200 drop-shadow-md">
                Transform Your Screen, Elevate Your Style.
                </h2>

                <a
                    href="https://drive.google.com/file/d/1_HBTsP-fobfUeXHA_u8CW-PQqVHfqp2h/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Download for Android
                </a>
            </div>
            {/* <FeatureSection /> */}
        </section>
    );
}

export default MainSection;
