import styled from "styled-components";
import { useState, useEffect } from "react";

const EnvioContacto = styled.section`
  text-align: center;
  padding: 20px;
  background-color: #f7f7f7;
  background-image: url('/img/fondo.jpg');
  background-size: cover;
  background-position: center;

  .HeroContenido {
    align-items: center;
    background-color: #FEFDF2;
    border-radius: 10px;

    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.7rem;
      color: #000;
      margin-bottom: 10px;
    }
  }

  .HeroImagen {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .formularioContacto {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 90%;
    margin: 0 auto;
    padding: 20px;
    background-color: #9aa387;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    resize: none;
  }

  textarea {
    height: 100px;
    line-height: 1.5;
  }

  button {
    background-color: #a9b58b;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #76a067;
    }
  }

  /* pantallas medianas */
  @media (max-width: 768px) {
    .HeroContenido {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h1 {
        font-size: 1.8rem;
        margin-bottom: 5px;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
    }

    .HeroImagen {
      aspect-ratio: 4 / 3;
    }

    .formularioContacto {
      max-width: 70%; /* Ajuste para pantallas medianas */
      padding: 20px;
      gap: 15px;
      margin: 0 auto;
      margin-top: 20px;
    }

    input,
    textarea {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      padding: 10px;
    }
  }

  /* pantallas pequeñas */
  @media (max-width: 480px) {
    .HeroContenido {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h1 {
        font-size: 1.5rem;
        margin-bottom: 5px;
      }

      p {
        font-size: 1rem;
        margin-bottom: 10px;
      }
    }

    .HeroImagen {
      aspect-ratio: 4 / 3;
    }

    .formularioContacto {
      gap: 8px;
      padding: 10px;
      max-width: 90%;
      margin: 0 auto;
    }

    input,
    textarea {
      font-size: 0.8rem;
    }

    button {
      font-size: 0.8rem;
      padding: 6px;
    }
  }

  /* pantallas grandes */
  @media (min-width: 1024px) {
    .HeroContenido {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 0;
      padding: 0;

      h1 {
        font-size: 3rem;
        margin-bottom: 5px;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
    }

    .HeroImagen {
      width: 100%;
      aspect-ratio: 16 / 9;
      height: auto;
      margin: 20px auto;
    }

    .formularioContacto {
      max-width: 50%;
      padding: 30px;
      gap: 20px;
      margin-top: 40px;
    }

    input,
    textarea {
      font-size: 1.2rem;
    }

    button {
      font-size: 1.2rem;
      padding: 15px;
    }
  }
`;

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    personas: "",
    fecha: "",
    pedido: "",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    setMinDate(formattedDate);
  }, []);

  // Función para formatear la fecha
  const formatearFecha = (fecha) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaObj = new Date(fecha);
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opciones);
    
    const hora = fechaObj.getHours();
    const minutos = String(fechaObj.getMinutes()).padStart(2, '0');
    return `${fechaFormateada} a las ${hora}:${minutos}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const telefonoWhatsApp = "50488181635";
    const fechaFormateada = formatearFecha(form.fecha);  // Formatear la fecha y hora
    const mensaje = `Hola, soy ${form.nombre}. Mi número de teléfono es ${form.telefono}. 
Quisiera hacer una reservación para ${form.personas} personas para el día ${fechaFormateada}. 
Además, me gustaría realizar el siguiente pedido: ${form.pedido}. 
Gracias por su atención.`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://api.whatsapp.com/send?phone=${telefonoWhatsApp}&text=${mensajeCodificado}`;
    window.open(url, "_blank");
  };

  return (
    <EnvioContacto>
      <div className="HeroContenido">
        <h1>Contacto</h1>
        <p>Gracias por ponerte en contacto con el mejor restaurante de comida saludable</p>
      </div>

      <div className="HeroImagen">
        <img src="/img/restau_BV.jpg" alt="Restaurante" />
      </div>

      <form className="formularioContacto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="personas"
          placeholder="Cantidad de personas"
          value={form.personas}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
          min={minDate}
        />
        <textarea
          name="pedido"
          placeholder="Tu pedido"
          rows="5"
          value={form.pedido}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </EnvioContacto>
  );
};

export default Contacto;
