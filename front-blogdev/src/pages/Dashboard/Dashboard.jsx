import React from 'react';
import styles from './Dashboard.module.css';
import { useCRUD } from '../../hooks/useCRUD';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { documents, error, loading, addDocument, updateDocument, deleteDocument } = useCRUD('posts');
  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const handleEditClick = (docId) => {
    navigate(`/edit-post/${docId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>Gerencie seus Posts</p>
      <ul>
        <label>
          <span>Título</span>
          <span>Ações</span>
        </label>
        {documents &&
          documents.map((doc) => (
            <li key={doc.id}>
              <span className={styles.alinhamento}>
                {doc.title} {doc.content}
              </span>
              <div>
                <button onClick={() => handlePostClick(doc.id)}>Ver Detalhes</button>
                <button onClick={() => handleEditClick(doc.id)}>Editar</button>
                <button onClick={() => deleteDocument(doc.id)}>Excluir</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;