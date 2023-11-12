import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { toast } from "sonner"
import { app } from "../firebaseConfig"
import { contexto } from "../providers/CustomProvider"

const Carrito = () => {

    const valorDelContexto = useContext(contexto)

    const handleClick = () => {
        valorDelContexto.toggleDark()
    }

    const handleFinalizarCompra = () => {

        const compra = {
            carrito: [{id: "1", cantidad: 1, precio: 1000}],
            usuario: {},
            created_at: serverTimestamp(),

        }

        const db = getFirestore(app)

        const comprasCollection = collection(db, "compras")

        const consulta = addDoc(comprasCollection, compra)

        consulta
            .then((resultado)=>{
                console.log(resultado.id)

                toast.success("Compra guardada con exito!")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Ocurrio un error al guardar la compra")
            })

    }

    return (
        <div>
            <h2 className="font-bold text-2xl mb-8">Carrito</h2>
            <button onClick={handleFinalizarCompra} className="btn">finalizar compra</button>
        </div>
    )
}
export default Carrito