import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import ItemDetail from "../components/ItemDetail"
import { app } from "../firebaseConfig"


function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const [notFound, setNotFound] = useState(true)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        

        const docRef = doc(productosCollection, "RaLqRGuXRsqvjglwl1Bb")
        const consulta = getDoc(docRef)
        
        
        toast.success("Cargando producto...")
        
        consulta
        .then((resultado)=>{

                const producto = resultado.data()
                producto.id = resultado.id
                setProducto(producto)
                setNotFound(false)
            })
            .catch((err) => {
                console.log(err)
                toast.error("Ocurrio un error al cargar el producto")
            })
            .finally(()=>{
                setLoading(false)
                toast.dismiss()
            })

    }, [])


    useEffect(() => {
        if (notFound && !loading) {
            navigate("/404")
        }
    }, [notFound, loading])


    if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <div>
            <h2 className="font-bold text-2xl mb-8">Inicio</h2>
            <ItemDetail producto={producto} />
        </div>
    )

}
export default ItemDetailContainer