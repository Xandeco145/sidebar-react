import React, { useState } from 'react';
import './Sidebar.css';
import { 
  LayoutDashboard, 
  BookOpen, 
  Bookmark, 
  Users, 
  Package, 
  BarChart2 
} from 'lucide-react';

const Sidebar = () => {
  // Estado que controla qual botão está selecionado no momento
  const [activeItem, setActiveItem] = useState('Dashboard');

  // Array estruturado para facilitar a renderização e manutenção dos links
  const menuItems = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Catálogo', icon: BookOpen, label: 'Catálogo' },
    { id: 'Reservas', icon: Bookmark, label: 'Reservas' },
    { id: 'Usuários', icon: Users, label: 'Usuários' },
    { id: 'Inventário', icon: Package, label: 'Inventário' },
    { id: 'Relatórios', icon: BarChart2, label: 'Relatórios' },
  ];

  return (
    <aside className="sidebar-container">
      {/* Topo / Logo */}
      <div className="sidebar-header">
        <h1 className="logo-title">Ulbra</h1>
        <span className="logo-subtitle">Biblioteca Acadêmica</span>
      </div>

      {/* Navegação Principal */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <Icon 
                className="icon" 
                size={20} 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Rodapé */}
      <div className="sidebar-footer">
        <h2 className="footer-title">Biblioteca Central</h2>
        <p className="footer-subtitle">Gestão do Acervo</p>
      </div>
    </aside>
  );
};

export default Sidebar;