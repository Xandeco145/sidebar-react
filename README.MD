# Sidebar Biblioteca Acadêmica

Componente de sidebar em React para o sistema de gestão da Biblioteca Acadêmica Ulbra.
Pronto para ser conectado a qualquer projeto React.

## Funcionamento

- Menu lateral com seis seções: Dashboard, Catálogo, Reservas, Usuários, Inventário e Relatórios.
- O item selecionado fica destacado (controlado por `useState`).
- Os itens são definidos em um array (`menuItems`), então adicionar ou remover seções é só editar a lista.
- Ícones da biblioteca [lucide-react](https://lucide.dev).

## Como rodar o exemplo

```bash
npm install
npm run dev
```

Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Como usar em outro projeto

1. Copie a pasta `src/components/Sidebar/` para o seu projeto.
2. Instale a dependência de ícones:
   ```bash
   npm install lucide-react
   ```
3. Importe e use o componente:
   ```jsx
   import Sidebar from './components/Sidebar/Sidebar.jsx';

   <Sidebar />
   ```

As fontes (Cormorant Garamond, Instrument Sans e JetBrains Mono) são carregadas pelo próprio `Sidebar.css` via Google Fonts.

## Tecnologias

React 18, Vite, lucide-react