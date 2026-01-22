import { useState, useEffect } from "react";
import {
  Headers,
  Container,
  Logo,
  Links,
  Agendar,
  MenuToggle,
  MobileMenu,
  MobileMenuOverlay,
  MobileLinks,
  MobileAgendar,
  CloseButton,
} from "./style";

import logo from "../../assets/images/limpcars-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = (id) => {
    closeMenu();
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { targetId: id } });
    }
  };

  const handleHomeClick = () => {
    closeMenu();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Bloquear scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Headers>
        <Container>
          <Logo>
            <img src={logo} alt="Limp Cars" />
          </Logo>

          <Links>
            <a onClick={handleHomeClick} style={{ cursor: "pointer" }}>Início</a>
            <a onClick={() => handleScroll("servicos")} style={{ cursor: "pointer" }}>Serviços</a>
            <a onClick={() => handleScroll("sobre")} style={{ cursor: "pointer" }}>Sobre</a>
            <a onClick={() => handleScroll("galeria")} style={{ cursor: "pointer" }}>
              Galeria
            </a>
            <a onClick={() => handleScroll("depoimentos")} style={{ cursor: "pointer" }}>
              Depoimentos
            </a>
            <a onClick={() => handleScroll("contato")} style={{ cursor: "pointer" }}>
              Contato
            </a>
          </Links>

          <Agendar onClick={() => navigate("/servicos")}>
            <a
              style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
            >
              Agendar
            </a>
          </Agendar>

          <MenuToggle onClick={toggleMenu} $isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuToggle>
        </Container>
      </Headers>

      <MobileMenuOverlay $isOpen={isMenuOpen} onClick={closeMenu} />
      <MobileMenu $isOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu} aria-label="Fechar menu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </CloseButton>
        <MobileLinks $isOpen={isMenuOpen}>
          <a onClick={handleHomeClick} style={{ cursor: "pointer" }}>
            Inicio
          </a>
          <a onClick={() => handleScroll("servicos")} style={{ cursor: "pointer" }}>
            Serviços
          </a>
          <a onClick={handleHomeClick} style={{ cursor: "pointer" }}>
            Sobre
          </a>
          <a onClick={() => handleScroll("galeria")} style={{ cursor: "pointer" }}>
            Galeria
          </a>
          <a onClick={() => handleScroll("depoimentos")} style={{ cursor: "pointer" }}>
            Depoimentos
          </a>
          <a onClick={() => handleScroll("contato")} style={{ cursor: "pointer" }}>
            Contato
          </a>
        </MobileLinks>
        <MobileAgendar onClick={() => { closeMenu(); navigate("/servicos"); }} $isOpen={isMenuOpen} style={{ cursor: "pointer" }}>
          Agendar
        </MobileAgendar>
      </MobileMenu>
    </>
  );
};

export default Header;
