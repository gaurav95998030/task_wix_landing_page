import demoVideo from '../../assets/demoVideo.mp4';
import ReactPlayer from 'react-player';

function VideoDemoSection() {
  return (
    <section className="w-full min-h-[600px] bg-gray-900 flex flex-col-reverse lg:flex-row justify-evenly items-center px-6 py-10">
      
      {/* Video container */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-full h-auto max-w-[800px]">
          <ReactPlayer
            url={demoVideo}
            width="100%"
            height="300px" // Reduced height for a landscape look
            controls={true} // to show the play, pause, and volume controls
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Optional description or title */}
      <div className="w-full lg:w-1/3 text-white flex flex-col items-start justify-center mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Explore TaskWiz in Action</h1>
        <p className="text-lg text-gray-400 text-center lg:text-left">Watch the demo video to learn how TaskWiz can help you master your tasks with ease.</p>
      </div>

    </section>
  );
}

export default VideoDemoSection;
