import React, { useEffect } from 'react';
import styles from './PostDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/userFetchDocument';

const PostDetails = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { document: post, error, loading } = useFetchDocument('posts', postId);

  useEffect(() => {
  }, [post, error, loading]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <p>Carregando detalhes da postagem...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os detalhes da postagem: {error}</p>;
  }

  if (!post) {
    return <p>Nenhuma postagem encontrada com o ID fornecido.</p>;
  }

  return (
    <div>
      <div className={styles.container}>
        <h1>Detalhes da Postagem</h1>
        <div>
          <img src={post.image} alt={`Imagem de ${post.title}`} />
          <h2>{post.title}</h2>
          <p>Criado por: {post.createdBy}</p>
          <p>Tags: {post.tags.join(', ')}</p>
          <p>Conteúdo: {post.body}</p>
          <button onClick={handleGoBack}>Voltar</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
