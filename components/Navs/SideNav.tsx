import { useSession } from "next-auth/react"

// Components
import IsAuth from "./AuthSideNav/IsAuth";
import NotAuth from "./AuthSideNav/NotAuth";

function sideNav() {

    // Session
    const { data: session } = useSession()


    if (session) return (
        <IsAuth />
    )

    return <NotAuth />
}

export default sideNav