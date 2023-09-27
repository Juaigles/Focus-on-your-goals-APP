import styles from './Goal.module.css';
import {Link} from 'react-router-dom'



function Goal({id,icono, eventos, detalles,periodo,meta,completado}) {

    return ( 
    <>
        <Link to={`/list/${id}`} className={styles.meta + " shadow"}>
            <div className='flex items-center'>
                <div className={styles.icono}>{icono}</div>
                <p className="text-xl ml-5 mr-10">{eventos}
                    <sub className='text-xs text-gray-500 ml-1'>/ {periodo}</sub>
                </p>
                <p>{detalles}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completado > meta ? completado = meta : completado}  de {meta}</p>
                    <div className={styles.bar1}>
                    <div style={{width: `${(completado/meta) * 100 < 100 ? Math.round((completado/meta) * 100) : 100}%`}}
                         className={styles.bar2}></div>
                    </div>
                </div>
                <button className='button button--gray'>Completado</button>
            </div>
        </Link>
    </> 
    );
}

export default Goal;