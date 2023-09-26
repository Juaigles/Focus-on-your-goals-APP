import { useContext } from 'react';
import Goal from './Goal'
import { Context } from '../../services/memoryContext';



function List() {
    const [state, send] = useContext(Context)
   
    return ( 
        state.order.map(id =>  <Goal key={id} {...state.objects[id]}></Goal> )
       
     );
}

export default List;