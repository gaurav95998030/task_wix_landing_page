import { useState } from "react"
import featureDataList from "../../data/featureData"


function FeatureSection() {

    const [ currentIndex, setCurrentIndex] = useState(0);

    const handleFeatureClick = (index)=>{
        console.log(index);
        setCurrentIndex(index);
    }
  return (
    <main className="w-full lg:w-[60%] min-h-[600px]  text-white flex flex-col gap-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl">
    <nav className="w-full flex gap-6  p-4 rounded-xl bg-gray-700 shadow-lg flex-wrap">
        {featureDataList.map((item, index) => {
            return (
                <button
                    onClick={() => handleFeatureClick(index)}
                    key={item.title}
                    className={`px-6 py-3 font-semibold tracking-wide rounded-full transition-all duration-300 ${
                        currentIndex == index
                            ? "bg-blue-500 text-white shadow-lg border-b-4 border-b-yellow-300 scale-105"
                            : "bg-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white"
                    }`}
                >
                    {item.title}
                </button>
            );
        })}
    </nav>

    <section className="w-full min-h-[400px] flex flex-col lg:flex-row gap-10 items-center bg-gray-800 p-8 rounded-xl shadow-lg ">
        <div className=" flex-grow w-full  lg:w-[250px] h-[600px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
                src={featureDataList[currentIndex].imageUrl}
                alt="feature"
                className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
        </div>

        <p className="text-gray-300 text-lg mt-5 leading-relaxed w-[90%]">
            {featureDataList[currentIndex].description}
        </p>
    </section>
</main>

  )
}

export default FeatureSection