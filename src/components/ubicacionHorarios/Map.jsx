import './Map.css'

const Map = () =>{
    return(
        <div className='mapContainer'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1721531628864!2d-87.85988422509313!3d14.58926427735444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f65be27cb1d290b%3A0x8031699f543614f1!2sRestaurante%20Don%20Tiki!5e0!3m2!1ses-419!2shn!4v1732141400912!5m2!1ses-419!2shn"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Map