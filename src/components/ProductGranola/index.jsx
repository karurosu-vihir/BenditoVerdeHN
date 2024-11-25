import "./Style.css"
const ProductGranola = () => {
  return (
    <div className="granola-component">
    {[
      {
        src: "/img/granola33.jpg",
        alt: "Granola Bendito Verde",
        text: "¡Prueba nuestra deliciosa granola! Es saludable y hecha con amor en Bendito Verde.",
      },
      {
        src: "/img/granola4.jpg",
        alt: "Ingredientes Naturales",
        text: "Ingredientes 100% reales y sin procesar. Perfectos para una dieta equilibrada.",
      },
      {
        src: "/img/granola5.jpeg",
        alt: "Variedad y sabor",
        text: "Explora nuestro sabor. Una experiencia única en cada cucharada.",
      },
    ].map((item, index) => (
      <div
        className={`granola-item ${index === 0 ? "hero-item" : ""}`}
        key={index}
      >
        <img src={item.src} alt={item.alt} />
        <div className="text-overlay">
          <p>
            <strong>{item.text.split(".")[0]}.</strong>{" "}
            {item.text.split(".").slice(1).join(".")}
          </p>
        </div>
      </div>
    ))}
  </div>
  
  
  

  );
};

export default ProductGranola;
