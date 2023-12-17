import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userFetchDocuments } from '../../hooks/userFetchDocuments';
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');
  const { documents: posts, error, loading } = userFetchDocuments('posts', null, search);

  useEffect(() => {
  }, [posts, error, loading]);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearch(searchTerm);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Veja nossos posts mais recentes</h1>
      <div>
        <label className={styles.search}>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={handleSearchChange} 
            onKeyPress={handleKeyPress} 
            placeholder='Ou busque por tags' 
          />
          <button onClick={handleSearchClick}>Pesquisar</button>
        </label>
      </div>
      <div className={styles.home}>
        {loading && <p>Carregando postagens...</p>}
        {error && <p>Ocorreu um erro ao carregar as postagens: {error}</p>}
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <img src={post.image} alt={`Imagem de ${post.title}`} width={'600px'} />
              <h2>{post.title}</h2>
              <p>Criado por: {post.createdBy}</p>
              <p><span> #{post.tags.join(" #")}</span></p>
              <button onClick={() => handlePostClick(post.id)}>Ver Detalhes</button>
            </div>
          ))
        ) : (
          <p>Nenhuma postagem disponível.</p>
        )}
      </div>
    </div>
  );
};

export default Home;