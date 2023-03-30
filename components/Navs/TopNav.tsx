
import { useSession } from "next-auth/react"

// Components
import IsAuth from "./AuthTopNav/IsAuth";
import NotAuth from "./AuthTopNav/NotAuth";


function Topnav() {

    // Session
    const { data: session } = useSession()

    if (session) return (
        <IsAuth />
    )

    return (
        <NotAuth />
    )
}

export default Topnav