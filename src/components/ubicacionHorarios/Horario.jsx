import "./Horario.css";
import { Context } from "../../Context/globalcontext"
import { Link, useLocation } from "react-router-dom"

const Horario = () => {
  const horarios = [
    { dia: "LUNES", horario: "7:00 AM - 5:00 PM" },
    { dia: "MARTES", horario: "7:00 AM - 5:00 PM" },
    { dia: "MIÉRCOLES", horario: "7:00 AM - 5:00 PM" },
    { dia: "JUEVES", horario: "7:00 AM - 5:00 PM" },
    { dia: "VIERNES", horario: "7:00 AM - 6:00 PM" },
    { dia: "SÁBADO", horario: "7:00 AM - 5:00 PM" },
    { dia: "DOMINGO", horario: "7:00 AM - 5:00 PM" },
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
                  {item.dia} : 
                 <strong> {item.horario}</strong>
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