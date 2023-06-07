import "../castCard/CastCard.css";

const CastCard = ({img,title,description}) => {
  return (
    <div className="card glass-effect">
      <img
        src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${img}`}
        alt=""
      />

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CastCard;
