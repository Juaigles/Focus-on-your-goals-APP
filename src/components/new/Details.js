import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../services/memoryContext";
import styles from "./Details.module.css";
import { useEffect, useState, useContext } from "react";

function Details() {
  const { id } = useParams();

  const [form, setForm] = useState({
    detalles: "",
    eventos: 1,
    periodo: "semana",
    icono: "",

    meta: 52,
    plazo: "2022-01-01",
    completado: 0,
  });

  const [state, send] = useContext(Context);

  const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;
  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
  };

  const navigate = useNavigate();
  const goalInMemory = state.objects[id];

  useEffect(() => {
    if (!id) return;

    if (!goalInMemory) {
      return navigate("/list");
    }
    setForm(goalInMemory);
  }, [id,goalInMemory, navigate]);

  const create =  () => {
    
   
    send({ type: "create", goal: form });
    navigate("/list");
  };

  const update =  () => {

    send({ type: "update", goal: form });
    navigate("/list");
  };

  const cancel = () => {
    navigate("/list");
  };

  const deleteGoal = () => {
    send({ type: "deleteGoal", id });
    navigate("/list");
  };

  const frequencyOptions = ["día", "semana", "mes", "año"];
  const iconos = ["->", "💻", "💴", "📚", "🏃", "🧘‍♀️"];
  return (
    <div className="shadow">
      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input
            className="input"
            placeholder="ej. 52 caminatas"
            value={detalles}
            onChange={(e) => onChange(e, "detalles")}
          />
        </label>

        <label className="label">
          ¿Con qué frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input
              className="input mr-6"
              type="number"
              value={eventos}
              onChange={(e) => onChange(e, "eventos")}
            />

            <select
              className="input"
              value={periodo}
              onChange={(e) => onChange(e, "periodo")}
            >
              {frequencyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input
            className="input"
            type="number"
            value={meta}
            onChange={(e) => onChange(e, "meta")}
          />
        </label>

        <label className="label">
          ¿Tienes una fecha límite?
          <input
            className="input"
            type="date"
            value={plazo}
            onChange={(e) => onChange(e, "plazo")}
          />
        </label>

        <label className="label">
          ¿Cuantas veces has completado ya esta meta?
          <input
            className="input"
            type="number"
            value={completado}
            onChange={(e) => onChange(e, "completado")}
          />
        </label>

        <label className="label">
          Escoge un icono para la meta
          <select
            className="input"
            value={icono}
            onChange={(e) => onChange(e, "icono")}
          >
            {iconos.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </form>

      <div className={styles.buttons}>
        {!id && <button className="button button--black" onClick={create}>
          Create
        </button>}

        {id && <button className="button button--black" onClick={update}>
          Update
        </button>}

        {id && <button className="button button--red" onClick={deleteGoal}>
          Delete
        </button>}

        <button className="button button--gray" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Details;
