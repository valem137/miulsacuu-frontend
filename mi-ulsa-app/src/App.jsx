import React, { useState } from 'react';
import './App.css';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

/**
 * COMPONENTE: TeamCard
 * En React, podemos crear funciones que devuelven HTML.
 * Recibe "props" (propiedades), que son como los atributos de una etiqueta HTML.
 */
const TeamCard = ({ name, role, img }) => {
    return (
        <div className="team-card">
            <img src={img} alt={`Foto de ${name}`} />
            <div className="team-card-text">
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </div>
    );
};

/**
 * COMPONENTE PRINCIPAL: App
 * Es el contenedor de toda la aplicación.
 */
function App() {
    // Arreglo de objetos: se guarda la información para no repetir código.
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const teamMembers = [
        { name: "Jorge Luis Romo González", role: "Docente", img: "img/user.png" },
        { name: "Miguel Dario Ruiz", role: "Project Manager y Backend", img: "img/user.png" },
        { name: "Valeria Alejandra Ortiz Medina", role: "Desarrolladora Frontend", img: "img/user.png" },
        { name: "Jorge Diego Chaparro Núñez", role: "Desarrollador Base de Datos", img: "img/user.png" },
        { name: "Rodrigo Legarreta Soto", role: "Analista de Datos", img: "img/user.png" },
        { name: "Jose Ricardo Holguin", role: "Desarrollador Android", img: "img/user.png" },
        { name: "César Enrique Corral Venzor", role: "Desarrollador iOS", img: "img/user.png" },
    ];
    {/* El return es lo que se va a mostrar en pantalla. Aquí escribimos el HTML de nuestra página, pero con sintaxis de React. */ }
    return (
        <div className='app-wrapper'>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <img src="img/logo_mi_ulsa_cuu.svg" alt="Logo ULSA" />
                    </div>
                    {/* /* El botón de menú es un toggle: cambia su estado entre abierto y cerrado. */}
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? '✕' : '☰'}
                    </button>
                    {/* /* La clase "open" se agrega al nav cuando el menú está abierto, lo que activa los estilos para mostrarlo. */}
                    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                        <a href="#features">Características</a>
                        <a href="#about">Acerca</a>
                        <a href="#contact">Contacto</a>
                    </nav>
                </div>
            </header >

            {/* /* El menú overlay es un fondo oscuro que aparece detrás del menú cuando está abierto. Al hacer clic en él, se cierra el menú. */}
            {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}


            <main>
                {/* La sección hero es la primera impresión que los usuarios tendrán de tu app. Aquí puedes destacar lo más importante. */}
                <section className="hero" >
                    <div className="container">
                        <h2>Conecta con tu universidad</h2>
                        <p>Servicios diseñados para la comunidad ULSA Chihuahua.</p>
                        <a className="btn" href="#download">Descargar App</a>
                    </div>
                </section>

                {/* La sección "Características" es una cuadrícula de tarjetas que describen las principales funciones de la app. */}
                <section id="features" className="features" >
                    <div className="grid">
                        <div className="card">
                            <h3>Acceso rápido</h3>
                            <p>Consulta horarios y avisos desde tu móvil.</p>
                        </div>
                        <div className="card">
                            <h3>Comunidad</h3>
                            <p>Conecta con alumnos y docentes fácilmente.</p>
                        </div>
                        <div className="card">
                            <h3>Herramientas</h3>
                            <p>Todo lo que necesitas en un solo lugar.</p>
                        </div>
                    </div>
                </section>

                {/* La sección "Acerca" es donde presentamos al equipo. Usamos el componente TeamCard para cada miembro del equipo, pasando sus datos como props. */}
                <section id="about" className="about" style={{ textAlign: 'center', padding: '40px 0' }
                }>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h2>Acerca de MI ULSA CUU</h2>
                        <p>Una herramienta de organización para los alumnos de la ULSA.</p>

                        <h3 className="team-title" style={{ marginTop: '40px', color: '#003B5C' }}>
                            Equipo de Desarrollo
                        </h3>

                        <div className="team-grid">
                            {/* se usa map para recorrer el arreglo de teamMembers y crear un TeamCard por cada miembro del equipo.
                    */}
                            {teamMembers.map((member, index) => (
                                <TeamCard
                                    key={index}
                                    name={member.name}
                                    role={member.role}
                                    img={member.img}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 Universidad La Salle Chihuahua</p>
            </footer>
        </div >
    );
}

export default App;