import { useState } from 'react';

const AddWorkplaceForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, name, link });
    setTitle('');
    setDescription('');
    setName('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="border border-white mt-5 p-3">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          type="url"
          className="form-control"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add Workplace
      </button>
    </form>
  );
};

export default AddWorkplaceForm;
