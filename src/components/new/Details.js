import styles from "./Details.module.css";

function Details() {
    const frequencyOptions = ["día","semna","mes","año"];
    const iconos = ["💻","💴","📚","🏃","🧘‍♀️"];
  return (
    <div className="shadow">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input className="input" placeholder="ej. 52 caminatas" />
        </label>
        <label className="label">
            ¿Con qué frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
            <div className="flex mb-6">
                <input className="input mr-6" type="number"/>
                <select className="input">
                    {frequencyOptions.map(option => <option value={option}>{option}</option>)}
                </select>
            </div>
        </label>
        <label className="label">
            ¿Cuantas veces deseas completar esta meta?
            <input className="input" type="number"/>
        </label>
        <label className="label">
            ¿Tienes una fecha límite?
            <input className="input" type="date"/>
        </label>
        <label className="label">
            ¿Cuantas veces has completado ya esta meta?
            <input className="input" type="number"/>
        </label>
        <label className="label">
            Escoge un icono para la meta
            <select className="input">
                {iconos.map(option => <option value={option}>{option}</option>)}
            </select>
        </label>
      </form>
      <div className={styles.buttons}>
        <button className="button button--black">Crear</button>
        <button className="button button--gray">Cancelar</button>
      </div>
    </div>
  );
}

export default Details;
