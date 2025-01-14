# WECOMP VI

Página destinada à Semana da Computação WECOMP.

### Diretórios e Arquivos

#### `public/`

Contém arquivos estáticos que podem ser acessados diretamente pelo navegador:

- `images/`: Imagens utilizadas no projeto, organizadas por propósito.
- `data/`: Arquivos de dados utilizados no projeto, organizados por propósito.

#### `src/`

Contém todo o código-fonte do projeto.

##### Arquivos principais

- `App.tsx`: Componente principal que encapsula o restante da aplicação.
- `main.tsx`: Ponto de entrada da aplicação.
- `vite-env.d.ts` e `vite-config.ts`: Configurações de tipos específicas do Vite.
- `package.json` e `package-lock.json`: Configuração de dependências do projeto.

##### `assets/`

Armazena recursos auxiliares, como ícones ou outras imagens específicas do projeto.

##### `components/`

Componentes reutilizáveis organizados em subdiretórios:

- **`Footer/`** e **`Header/`**: Componentes para o rodapé e cabeçalho, respectivamente.
- **`menus/`**:
  - `Mobile/`: Menu para dispositivos móveis.
  - `Navigation/`: Componente de navegação principal.
- **`sections/`**:
  - Seções específicas da aplicação.
- **`ui/`**:
  - Componentes de interface do usuário, como botões, componentes de texto e outros elementos que podem ser reutilizados por outros componentes na aplicação.

##### `context/`

Contém módulos utilizados para centralizar e prover estados para a aplicação.

##### `global/`

Contém estilos globais aplicados à aplicação:

- `GlobalStyles.ts`: Define o tema base e os estilos globais.

##### `pages/`

Contém as páginas da aplicação:

- `Home/`: Página inicial, com seu estilo e lógica.

##### `styles/`

Estilos compartilhados entre componentes:

- Estilos genéricos para outros componentes.

##### `animations/`

Contém animações reutilizáveis

##### `types/`

Definições de tipos TypeScript:

- Tipos utilizados para garantir a tipagem no projeto.

##### `hooks/`

Contém hooks personalizados utilizados pelos componentes.

##### `dto/`

Centraliza a exportação dos componentes chave.

##### `utils/`

Funções utilitárias:

## Como rodar o projeto

1. Faça uma cópia do projeto utilizando o comando `git clone https://github.com/pet-ads/wecomp-new.git` em um diretório local.
2. Instale as dependências utilizando o gerenciador de pacotes de sua preferência (npm ou yarn), executando o comando no terminal `npm install` ou `yarn install`.
3. Com as dependências instaladas, execute o comando `npm run dev` ou `yarn run dev`.

## Como contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch: `git checkout -b minha-branch`.
3. Faça suas alterações e adicione commits: `git commit -m "Minha contribuição"`.
4. Envie suas alterações: `git push origin minha-branch`.
5. Abra um Pull Request.
