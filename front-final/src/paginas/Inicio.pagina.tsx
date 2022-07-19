import Filtros from "../componentes/personagens/filter";
import GradePersonagens from "../componentes/personagens/gradep";
import Paginacao from "../componentes/paginacao/paginacao";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonagemThunk } from '../store/actions/personagens.action';
import { useEffect } from 'react';
import './Inicio.css';

/**
 * @returns Página inicio
 */
const PaginaInicio = () => {

  const { personagens, isFetching, errorMessage } = useSelector((state: any) => state.person);
  

  const dispatch = useDispatch();  

  useEffect(() => {
    fetchPersonagemThunk()(dispatch);        
    
  },[dispatch]);

  return (
      
      <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>        
      </div>
      <Filtros />
      <Paginacao />
      {isFetching && <span>Carregando...</span>}
      {errorMessage && <span>Ocorreu um erro: {errorMessage}</span>}
      <GradePersonagens personagens={personagens}/>
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
