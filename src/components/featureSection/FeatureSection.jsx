import { useState } from "react";
import featureDataList from "../../data/featureData";

function FeatureSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFeatureClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <main className="mt-10 w-full lg:w-[60%] min-h-[600px] text-white flex flex-col gap-12 p-6 bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900 rounded-3xl shadow-2xl transition-all duration-300 ease-in-out">
            <nav className="w-full flex gap-4 p-4 rounded-xl bg-blue-700/80 shadow-lg flex-wrap">
                {featureDataList.map((item, index) => {
                    return (
                        <button
                            onClick={() => handleFeatureClick(index)}
                            key={item.title}
                            className={`px-6 py-3 font-semibold tracking-wide rounded-full transition-all duration-300 ease-in-out transform ${
                                currentIndex === index
                                    ? "bg-purple-600 text-white shadow-lg border-b-4 border-purple-300 scale-105"
                                    : "bg-blue-600/70 text-gray-300 hover:bg-purple-700 hover:text-white"
                            }`}
                        >
                            {item.title}
                        </button>
                    );
                })}
            </nav>

            <section className="w-full min-h-[400px] flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300">
                <div className="flex-grow w-full lg:w-[250px] h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
                    <img
                        src={featureDataList[currentIndex].imageUrl}
                        alt="feature"
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="text-gray-200 text-lg leading-relaxed w-[90%] lg:w-[60%] lg:px-4">
                    {featureDataList[currentIndex].description}
                </p>
            </section>
        </main>
    );
}

export default FeatureSection;
