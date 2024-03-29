const Ad = ({ imgSrc, title, description }) => {
  return (
    <a href="#">
      <div className="card card-side bg-base-100 shadow-xl">
        <img src={imgSrc} />

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Ad;
