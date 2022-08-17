import { Row } from 'react-bootstrap'
import useBebidas from "../hooks/useBebidas";
import  { Bebida } from './Bebida';

export const ListadoBebidas = () => {
     const { bebidas } = useBebidas();
     console.log(bebidas);
     return ( 
          <Row className="mt-5">
               {bebidas.map(bebida =>(
                 <Bebida
                   key={bebida.idDrink}
                   bebida={bebida}
                 />
               ))}
          </Row>
      );
}