import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const ProtectToken = () => {

    const Navigate = useNavigate()


    const protect = () => {

        const token = localStorage.getItem('token')

        if (token === null) {
            alert("Você deve estar logado para continuar")
            Navigate('/login')

        }
    }

    useEffect(() => {

        protect()

    }, [protect()])

}

export default ProtectToken