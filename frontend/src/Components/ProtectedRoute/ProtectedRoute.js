import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


/**
 * Componente de rota protegida.
 * Renderiza o componente fornecido somente se o usuário estiver autenticado, caso contrário, redireciona para a página de login.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {React.ComponentType} props.component - Componente a ser renderizado se o usuário estiver autenticado.
 * @param {boolean} props.isAuthenticated - Indica se o usuário está autenticado.
 * @param {Object} props.rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} O componente a ser renderizado ou o redirecionamento para a página de login.
 */

//Componente utilizado para renderizar rotas protegidas. Caso isAuthenticated ser false ira direcionar o usuario para a tela de login. Evitando de rotas serem acessadas sem ter sido feito login.
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
        
        const navigate = useNavigate();
        
        function RetornaLogin(){
                useEffect(() => {
                        
                                navigate('/');
                        
                }, [])

        }


    return (
                isAuthenticated ? <Component {...rest} /> : RetornaLogin()
        );
        
};

export default ProtectedRoute;