// Components
import SideNav from "./Navs/SideNav"
import TopNav from "./Navs/TopNav"
import BottomNav from "./Navs/BottomNav"

function Layout({ children }: any) {

    return (
        <>
            {/* Desktop: 992px and above */}
            <SideNav />
            {/* Tablet-Mobile: 991px and below */}
            <TopNav />
            {children}
            <BottomNav />
        </>
    )
}

export default Layout