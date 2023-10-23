import { useState } from "react"

function Contador(props) {


    const [contador,setContador] = useState (props.inicial)
    


    const handleSumar = () => {
        setContador(contador + 1)
    }

    const handleRestar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
        
    }

    const handleResetear = () => {
        setContador(1)
    }




    return(
        <div>
            <p>Contador Actual : {contador}</p>
            <button onClick={handleSumar} className="btn">Sumar</button>
            <button onClick={handleRestar} className="btn">Restar</button>
            <button onClick={handleResetear} className="btn">Resetear</button>
        </div>
    )
}
export default Contador