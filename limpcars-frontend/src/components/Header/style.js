import styled from "styled-components"

export const Headers = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    background: ${(props) => (props.$scrolled ? "rgba(10, 10, 10, 0.5)" : "transparent")};
    backdrop-filter: ${(props) => (props.$scrolled ? "blur(8px)" : "none")};
    -webkit-backdrop-filter: ${(props) => (props.$scrolled ? "blur(8px)" : "none")};

    @media (max-width: 968px) {
        height: 65px;
        padding: 0 12px;
    }

    @media (max-width: 768px) {
        height: 60px;
        padding: 0 10px;
    }

    @media (max-width: 480px) {
        height: 56px;
        padding: 0 8px;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 50px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 99px;
    background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(15, 15, 15, 0.85) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
    transition: all 0.3s ease;

    @media (max-width: 968px) {
        height: 46px;
        padding: 0 16px;
        max-width: 95%;
        border-radius: 60px;
    }

    @media (max-width: 768px) {
        height: 44px;
        padding: 0 14px;
        max-width: 100%;
        border-radius: 50px;
        box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
    }

    @media (max-width: 480px) {
        height: 42px;
        padding: 0 12px;
        border-radius: 40px;
    }
`

export const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    img {
        height: 60px;
        width: auto;
        object-fit: contain;
        transition: height 0.3s ease;
    }

    @media (max-width: 968px) {
        img {
            height: 32px;
        }
    }

    @media (max-width: 768px) {
        img {
            height: 30px;
        }
    }

    @media (max-width: 480px) {
        img {
            height: 28px;
        }
    }
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    flex: 1;
    justify-content: center;

    @media (max-width: 1100px) {
        gap: 20px;
    }

    @media (max-width: 968px) {
        display: none;
    }

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        font-family: 'Inter Tight', sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        transition: all 0.3s ease;
        white-space: nowrap;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #00e0ff, #00b8d4);
            transition: width 0.3s ease;
            border-radius: 2px;
        }

        &:hover {
            color: white;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

            &::after {
                width: 100%;
            }
        }
    }
`

export const Agendar = styled.button`
    padding: 0 22px;
    height: 38px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: black;
    font-family: 'Inter Tight', sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border-radius: 99px;
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 16px;

    @media (max-width: 968px) {
        display: none;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    a {
        text-decoration: none;
        color: black;
    }
`

export const MenuToggle = styled.button`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    cursor: pointer;
    padding: 7px;
    z-index: 1003;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 5px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    @media (max-width: 968px) {
        display: flex;
    }

    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
        padding: 6px;
        gap: 4px;
        border-radius: 8px;
    }

    &:hover {
        background: ${(props) => (props.$isOpen ? "rgba(0, 224, 255, 0.15)" : "rgba(255, 255, 255, 0.12)")};
        border-color: ${(props) => (props.$isOpen ? "rgba(0, 224, 255, 0.4)" : "rgba(255, 255, 255, 0.2)")};
        transform: scale(1.05);
        box-shadow: 0 4px 12px ${(props) => (props.$isOpen ? "rgba(0, 224, 255, 0.3)" : "rgba(0, 0, 0, 0.2)")};
    }

    &:active {
        transform: scale(0.95);
    }

    span {
        width: 18px;
        height: 2.5px;
        background: ${(props) => (props.$isOpen ? "linear-gradient(90deg, #00e0ff, #00b8d4)" : "rgba(255, 255, 255, 0.95)")};
        border-radius: 10px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: center;
        box-shadow: ${(props) => (props.$isOpen ? "0 0 8px rgba(0, 224, 255, 0.5)" : "none")};

        @media (max-width: 480px) {
            width: 16px;
            height: 2px;
        }

        &:nth-child(1) {
            transform: ${(props) => (props.$isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0) translate(0, 0)")};
        }

        &:nth-child(2) {
            opacity: ${(props) => (props.$isOpen ? "0" : "1")};
            transform: ${(props) => (props.$isOpen ? "translateX(-20px) scale(0)" : "translateX(0) scale(1)")};
        }

        &:nth-child(3) {
            transform: ${(props) => (props.$isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0) translate(0, 0)")};
        }
    }
`

export const MobileMenuOverlay = styled.div`
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(10, 10, 10, 0.75) 100%);
    z-index: 1000;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (min-width: 969px) {
        display: none;
    }
`

export const MobileMenu = styled.div`
    position: fixed;
    top: 70px;
    right: ${(props) => (props.$isOpen ? "10px" : "-100%")};
    width: 320px;
    max-width: calc(100vw - 20px);
    height: auto;
    max-height: calc(100vh - 90px);
    background: linear-gradient(145deg, rgba(10, 10, 10, 0.98) 0%, rgba(15, 15, 20, 0.95) 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    z-index: 1002;
    padding: 24px 20px;
    box-sizing: border-box;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset,
        0 0 80px rgba(0, 224, 255, 0.1);
    transform: ${(props) => (props.$isOpen ? "translateX(0) scale(1)" : "translateX(100%) scale(0.95)")};
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    
    /* Scrollbar personalizada */
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 224, 255, 0.3);
        border-radius: 10px;
        
        &:hover {
            background: rgba(0, 224, 255, 0.5);
        }
    }

    @media (max-width: 968px) {
        top: 65px;
        max-height: calc(100vh - 85px);
    }

    @media (max-width: 768px) {
        top: 60px;
        max-height: calc(100vh - 80px);
        width: 90%;
        max-width: 300px;
        right: ${(props) => (props.$isOpen ? "12px" : "-100%")};
        border-radius: 18px;
        padding: 20px 16px;
    }

    @media (max-width: 480px) {
        top: 56px;
        left: 8px;
        right: ${(props) => (props.$isOpen ? "8px" : "-100%")};
        width: auto;
        max-width: none;
        max-height: calc(100vh - 75px);
        border-radius: 16px;
        padding: 18px 14px;
        gap: 14px;
    }

    @media (min-width: 969px) {
        display: none;
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1003;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    &:hover {
        background: rgba(0, 224, 255, 0.15);
        border-color: rgba(0, 224, 255, 0.4);
        color: #00e0ff;
        transform: rotate(90deg) scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 224, 255, 0.3);
    }

    &:active {
        transform: rotate(90deg) scale(0.95);
    }

    @media (max-width: 480px) {
        top: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
        border-radius: 8px;
    }
`

export const MobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Inter Tight', sans-serif;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 14px 18px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        position: relative;
        overflow: hidden;
        opacity: 0;
        transform: translateX(20px);
        animation: ${(props) => (props.$isOpen ? "slideInLeft 0.5s ease forwards" : "none")};
        
        /* Efeito de brilho ao hover */
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 224, 255, 0.1), transparent);
            transition: left 0.5s ease;
        }

        &:hover, &:active {
            color: #00e0ff;
            background: linear-gradient(135deg, rgba(0, 224, 255, 0.12) 0%, rgba(0, 184, 212, 0.08) 100%);
            border-color: rgba(0, 224, 255, 0.3);
            transform: translateX(8px) scale(1.02);
            box-shadow: 
                0 4px 12px rgba(0, 224, 255, 0.2),
                inset 0 0 20px rgba(0, 224, 255, 0.05);
            
            &::before {
                left: 100%;
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* Animação escalonada para cada item */
        &:nth-child(1) {
            animation-delay: 0.1s;
        }
        &:nth-child(2) {
            animation-delay: 0.15s;
        }
        &:nth-child(3) {
            animation-delay: 0.2s;
        }
        &:nth-child(4) {
            animation-delay: 0.25s;
        }
        &:nth-child(5) {
            animation-delay: 0.3s;
        }
        &:nth-child(6) {
            animation-delay: 0.35s;
        }

        @media (max-width: 480px) {
            font-size: 14px;
            padding: 12px 16px;
            border-radius: 10px;
        }
    }
`

export const MobileAgendar = styled.a`
    display: block;
    padding: 16px 24px;
    background: linear-gradient(135deg, #00e0ff 0%, #00b8d4 50%, #00a0c4 100%);
    color: #050505;
    text-decoration: none;
    font-family: 'Inter Tight', sans-serif;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-radius: 14px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: 4px;
    box-shadow: 
        0 6px 24px rgba(0, 224, 255, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset,
        0 0 40px rgba(0, 224, 255, 0.2);
    position: relative;
    overflow: hidden;
    transform: translateY(${(props) => (props.$isOpen ? "0" : "20px")});
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    animation: ${(props) => (props.$isOpen ? "slideInUp 0.6s ease 0.4s forwards" : "none")};
    
    /* Efeito de brilho animado */
    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: rotate(45deg);
        animation: shine 3s infinite;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes shine {
        0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }
        100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
        }
    }

    &:hover, &:active {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 
            0 10px 40px rgba(0, 224, 255, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.2) inset,
            0 0 60px rgba(0, 224, 255, 0.4);
        background: linear-gradient(135deg, #00f0ff 0%, #00c8e4 50%, #00b0d4 100%);
    }

    @media (max-width: 480px) {
        font-size: 13px;
        padding: 14px 20px;
        border-radius: 12px;
    }
`
