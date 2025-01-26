import { createContext, useState } from 'react';

// Criando o contexto
export const CarrinhoContext = createContext();

// Criando o Provedor do contexto
export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar um livro ao carrinho
  const adicionarAoCarrinho = (livro) => {
    setCarrinho([...carrinho, livro]);
  };

  // Função para remover um livro do carrinho
  const removerDoCarrinho = (idLivro) => {
    setCarrinho(carrinho.filter((livro) => livro.id !== idLivro));
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};