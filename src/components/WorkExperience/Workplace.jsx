const Workplace = ({ title, description, name, link }) => {
  return (
    <div className="workplace col-12">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <strong>{name}</strong>
          </p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Workplace;
