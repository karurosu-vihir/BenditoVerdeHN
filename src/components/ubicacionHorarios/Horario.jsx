import "./Style.css";
import { Context } from "../../Context/globalcontext"
import { Link, useLocation } from "react-router-dom"

const Horario = () => {
  const horarios = [
    { dia: "Lunes", horario: "7:00 AM - 5:00 PM" },
    { dia: "Martes", horario: "Cerrado" },
    { dia: "Miércoles", horario: "7:00 AM - 5:00 PM" },
    { dia: "Jueves", horario: "7:00 AM - 5:00 PM" },
    { dia: "Viernes", horario: "7:00 AM - 6:00 PM" },
    { dia: "Sábado", horario: "7:00 AM - 5:00 PM" },
    { dia: "Domingo", horario: "7:00 AM - 5:00 PM" },
  ];

  return (
    <>
      <section className="mainContainer">
        <div className="horarioContainer">
          <div className="card">
            <h1>HORARIOS</h1>
            <ul>
              {horarios.map((item, index) => (
                <li key={index}>
                  {item.dia}: {item.horario}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="btnContainer">
      <Link className="btn" to={"/contactanos"}><button>Contáctanos</button></Link>
      </div>
    </>
  );
};

export default Horario;
