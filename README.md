ON-IT

# Galeria de Imagens em React

Este é um projeto de **Galeria de Imagens em React** que permite aos usuários arrastar e reorganizar imagens em uma galeria, salvar a nova disposição e reverter mudanças, se necessário. O projeto também inclui um recurso de visualização de imagens em formato maior (Lightbox).

## Funcionalidades

- **Reorganização de Imagens**: Funcionalidade de arrastar e soltar para reorganizar as imagens.
- **Salvar & Reverter**: Salve a nova ordem das imagens no `localStorage` e reverta para o estado salvo anteriormente.
- **Lightbox**: Clique em qualquer imagem para visualizá-la em uma caixa de luz em tela cheia, com controles de navegação.
- **Ordem Persistente das Imagens**: A ordem das imagens persiste entre recarregamentos da página usando `localStorage`.

## Demonstração

Adicione uma captura de tela ou GIF do aplicativo em ação, se possível.

## Instalação

Para começar a usar o projeto, siga os passos abaixo:

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instalar Dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Depois, instale as dependências necessárias executando:

```bash
npm install
```

### 3. Executar o Aplicativo

Para rodar o aplicativo em modo de desenvolvimento, use:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador padrão em [http://localhost:3000](http://localhost:3000).

## Como Usar

- **Reorganizar Imagens**: Arraste e solte qualquer imagem para reorganizar a galeria.
- **Salvar Alterações**: Após reorganizar as imagens, clique no botão "Salvar Nova Ordem" para salvar as alterações no `localStorage`.
- **Reverter Alterações**: Para desfazer alterações não salvas e voltar para a ordem previamente salva, clique no botão "Reverter Alterações".
- **Visualizar Imagens em Lightbox**: Clique em uma imagem para abri-la em uma Lightbox e use as setas para navegar entre as imagens.

## Estrutura do Projeto

```
.
├── public/                  # Diretório público
├── src/
│   ├── components/           # Componentes utilizados no projeto
│   │   └── ImageCard.js      # Componente para cada imagem
│   ├── images/               # Imagens usadas no projeto
│   ├── App.js                # Componente principal
│   ├── Gallery.js            # Componente da galeria (lógica central)
│   └── index.js              # Ponto de entrada do aplicativo React
├── package.json              # Dependências e scripts
└── README.md                 # Documentação do projeto
```

## Dependências

As seguintes bibliotecas são utilizadas neste projeto:

- **React**: Biblioteca para construção de interfaces de usuário.
- **immutability-helper**: Para gerenciar atualizações imutáveis no estado.
- **react-image-lightbox**: Para a funcionalidade de visualização em Lightbox.
- **localStorage**: Para persistir a ordem das imagens entre recarregamentos da página.
  
Você pode ver todas as dependências no arquivo `package.json`.

## Personalização

### Adicionando Mais Imagens

Para adicionar mais imagens à galeria:

1. Coloque suas imagens dentro da pasta `src/images/`.
2. Importe as novas imagens no arquivo `Gallery.js`:
   ```javascript
   import newImg from "../images/newImg.jpg";
   ```
3. Adicione a nova imagem ao array `defaultImages`:
   ```javascript
   const defaultImages = [
     { id: 1, src: img1 },
     { id: 2, src: img2 },
     { id: 3, src: img3 },
     { id: 4, src: img4 },
     { id: 5, src: newImg },  // Nova imagem adicionada
   ];
   ```

### Modificando os Estilos

Você pode modificar os estilos da galeria e dos botões nos arquivos CSS correspondentes. Os botões atualmente utilizam classes do Tailwind CSS para estilização, mas você pode substituir ou adicionar estilos personalizados conforme necessário.

## Contribuindo

Se você deseja contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie um novo branch para sua funcionalidade ou correção de bug.
3. Faça o commit de suas alterações e envie o branch para o seu fork.
4. Abra um pull request explicando as mudanças feitas e por que elas são necessárias.

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).


