import './MensajesHeader.component.scss';

export default function MensajesHeader(props) {
  return (
    <div className="MensajesHeader">
      <button onClick={props.setShow} className="Nuevo">Nuevo</button>
      <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
      <button onClick={props.setLogOut} className="Vaciar" style={{position: "absolute",right: "5px"}}>Cerrar sesión</button>
    </div> 
  );
}