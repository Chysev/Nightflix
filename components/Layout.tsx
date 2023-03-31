// Components
import SideNav from "./Navs/SideNav"
import TopNav from "./Navs/TopNav"
import BottomNav from "./Navs/BottomNav"
import { AppShell } from "@mantine/core"

function Layout({ children }: any) {

    return (
        <>
            <AppShell
                navbar={<SideNav />}
                header={<TopNav />}
                footer={<BottomNav />}
            >
                {children}
            </AppShell>
        </>
    )
}

export default Layout