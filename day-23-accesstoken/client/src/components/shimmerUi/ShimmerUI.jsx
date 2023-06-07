import Header from "../Header/Header";
import "../shimmerUi/ShimmerUI.css";

const ShimmerUI = () => {
  return (
    <>
      <Header />
      <div className="shimmer-container">
        <div className="home-overlay"></div>
        <div className="shimmer-main">
          <div className="top-card"></div>
          <div className="shimmer-card-container">
            {Array.from({ length: 8 }).map((i) => {
              return (
                <div className="card">
                  <div className="shimmer-image"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerUI;
