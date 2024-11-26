import styled from "styled-components";

const AboutSection = styled.section`
  text-align: center;
  padding: 20px;
  background-color: #f7f7f7;
  background-image: url('/img/fondo.jpg');
  background-size: cover;
  background-position: center;

  .hero-contenido {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    background-color: #FEFDF2;
    border-radius: 10px;
    margin-bottom: 20px;

    h1 {
      font-size: 2.5rem;
      color: #4a4a4a;

      span {
        color: #9caf88;
      }
    }

    p {
      font-size: 1.2rem;
      color: #333;
      max-width: 700px;
      margin-bottom: 20px;
    }
  }

  .hero-imagen {
    width: 100%;
    aspect-ratio: 16 / 3;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .contenido-historia {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #FEFDF2;
    border-radius: 10px;

    .text {
      text-align: left;
      margin: 0 auto;
      max-width: 700px;
      margin-top: 10px;
      margin-bottom: 10px;

      h2 {
        font-size: 1.8rem;
        color: #4a4a4a;
        text-align: center;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
        text-align: center;
      }
    }

    .imagen-historia {
      width: 100%;
      border-radius: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 16 / 9;
      }
    }
  }

  .importante {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 10px;

    .mision,
    .vision {
      background-color: #FEFDF2;
      padding: 15px;
      border-radius: 10px;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;

      h3 {
        font-size: 1.5rem;
        color: #4a4a4a;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 10px;
      }

      p {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
      }

      .icono {
        width: 30px;
        height: 30px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .vision {
      background-color: #dce3ce;
    }
  }

  @media (min-width: 768px) {
    .hero-contenido {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .contenido-historia {
      align-items: center;
      flex-direction: row;
      gap: 20px;

      .text,
      .imagen-historia {
        flex: 1;
        max-width: 50%;
      }
    }

    .importante {
      flex-direction: row;

      .mision,
      .vision {
        flex: 1;
        margin: 0 10px;
      }
    }
  }

  @media (min-width: 1024px) {
    .hero-contenido {
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
        max-width: 800px;
      }
    }

    .hero-imagen {
      aspect-ratio: 16 / 5;
    }

    .contenido-historia .imagen-historia img {
      height: 400px;
    }

    .importante {
      margin-top: 20px;
    }
  }

  @media (max-width: 480px) {
    .hero-contenido {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .hero-contenido h1 {
      font-size: 2.5rem;
      color: #4a4a4a;
      margin: 0;
    }

    .hero-contenido p {
      font-size: 1.2rem;
      color: #333;
      max-width: 700px;
      margin: 0;
      margin-bottom: 10px;
    }

    .hero-imagen {
      aspect-ratio: 16 / 7;
    }

    .contenido-historia {
      .text {
        font-size: 0.9rem;
      }

      .imagen-historia img {
        height: 250px;
      }
    }

    .importante {
      .mision,
      .vision {
        padding: 10px;
        font-size: 0.9rem;
      }
    }
  }
`;


const About = () => {
  return (
    <AboutSection>
      <div className="hero-contenido">
        <h1>
          About <span>Us</span>
        </h1>
        <p>
          Somos un restaurante donde el sabor, la frescura y el amor por los alimentos se encuentran en cada plato.
        </p>
      </div>
      <div className="hero-imagen">
        <img src="/img/BenditoV.jpg" alt="Delicious food" />
      </div>
      <div className="contenido-historia">
        <div className="text">
          <h2>Nuestra Historia</h2>
          <p>
            En Bendito Verde creemos en el poder transformador de una alimentación fresca y saludable. Nos esforzamos
            por ofrecer platos únicos, con ingredientes naturales y cuidadosamente seleccionados. Creemos en un mundo
            donde cada comida sea una experiencia, y estamos dedicados a satisfacer tu gusto.
          </p>
        </div>
        <div className="imagen-historia">
          <img src="/img/restau_BV.jpg" alt="Restaurant interior" />
        </div>
      </div>
      <div className="importante">
        <div className="mision">
          <h3>
            <img src="/img/mission.png" alt="Icono Misión" className="icono" /> Misión
          </h3>
          <p>
            Ofrecer una experiencia gastronómica fresca, delicada y saludable, donde cada plato se prepare con
            ingredientes naturales y de la mejor calidad.
          </p>
        </div>
        <div className="vision">
          <h3>
            <img src="/img/vision.png" alt="Icono Visión" className="icono" /> Visión
          </h3>
          <p>
            Aspiramos a ser el lugar donde comer saludable sea sinónimo de disfrutar, ofreciendo opciones frescas y
            sabrosas para todos, sin importar su estilo de vida.
          </p>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;



