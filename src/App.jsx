import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      {/* Componente que acabamos de criar */}
      <Sidebar />
      
      {/* Área principal de teste ao lado da Sidebar */}
      <main style={{ flex: 1, padding: '40px', fontFamily: 'Instrument Sans, sans-serif' }}>
        <h1>Página de Teste Limpa</h1>
        <p>A sidebar está funcionando na esquerda. O restante do sistema seria renderizado aqui nesta área cinza.</p>
      </main>
    </div>
  );
}

export default App;