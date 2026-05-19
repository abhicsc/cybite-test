import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      {/* Background Glow */}
      <div className="video-glow"></div>

      <div className="video-container">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source src="/horse-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="video-overlay">
          <div className="content-box">
            <h1>
              We propel your brand
              <br />
              towards limitless digital
              <br />
              horizons
            </h1>

            <p>
              Experience the power of innovation and growth
              <br />
              with our cutting-edge digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;