import "./Style.css"
const ProductGranola = () => {
  return (
    <div className="granola-component">
    <div className="image-container">
      <img src="/img/granola33.jpg" alt="Granola Bendito Verde" />
      <div className="text-overlay">
        <p><strong>¡Prueba nuestra deliciosa granola!</strong> Es saludable y hecha con amor en Bendito Verde.</p>
      </div>
    </div>
    <div className="image-container">
      <img src="/img/granola4.jpg" alt="Ingredientes Naturales" />
      <div className="text-overlay">
        <p><strong>Ingredientes 100% reales y sin procesar.</strong> Perfectos para una dieta equilibrada.</p>
      </div>
    </div>
    <div className="image-container">
      <img src="/img/granola5.jpeg" alt="Variedad y sabor" />
      <div className="text-overlay">
        <p><strong>Explora nuestro sabor.</strong> Una experiencia única en cada cucharada.</p>
      </div>
    </div>
  </div>
  

  );
};

export default ProductGranola;
