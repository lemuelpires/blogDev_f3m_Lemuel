import React, { useEffect } from 'react';
import styles from './PostDetails.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/userFetchDocument';

const PostDetails = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { document: post, error, loading } = useFetchDocument('posts', postId);

  useEffect(() => {
    // Se quiser fazer algo quando os detalhes da postagem forem carregados, coloque aqui.
    // Por exemplo, parar a exibição de um spinner de carregamento.
  }, [post, error, loading]);

  const handleGoBack = () => {
    // Use o navigate para voltar à página anterior
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
          {/* Adicione mais elementos conforme necessário */}
          <button onClick={handleGoBack}>Voltar</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
