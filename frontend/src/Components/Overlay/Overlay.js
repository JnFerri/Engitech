import styled from "styled-components";

/**
 * Componente Overlay utilizado para cobrir toda a tela e deixar ela escurecida, utilizado quando aberto modal para dar destaque no modal.
 */
const Overlay = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escurecido */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Certifique-se de que o overlay está acima de outros elementos */
`

export default Overlay