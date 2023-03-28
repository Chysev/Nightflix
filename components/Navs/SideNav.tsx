import Link from "next/link"
import { BiSun } from '@react-icons/all-files/bi/BiSun'
import { BiMoon } from '@react-icons/all-files/bi/BiMoon'
import { FaTrailer } from "@react-icons/all-files/fa/FaTrailer"
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'
import { RiMovieFill } from "@react-icons/all-files/ri/RiMovieFill"
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle"
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { MdSubscriptions } from "@react-icons/all-files/md/MdSubscriptions"
import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout"
import { CgArrowsExchange } from '@react-icons/all-files/cg/CgArrowsExchange'
import { ActionIcon, Box, Divider, Navbar, useMantineColorScheme, Text } from "@mantine/core"

function sideNav() {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Navbar className="sidenav" maw={300}>
            <Navbar.Section>
                <Link className="middle" href="/">
                    <Text color={dark ? '#339af0' : '#339af0'} fz={16}>
                        <h1 className="font1 nightflix">NIGHTFLIX</h1>
                    </Text>
                </Link>

                <Divider my="sm" labelPosition="center"
                    label={<ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? <BiSun size="1.1rem" /> : <BiMoon size="1.1rem" />}
                    </ActionIcon>} />

            </Navbar.Section>

            <Navbar.Section className="sideicons" grow maw={200}>
                <Link href="/">
                    <Box className="li" maw={98}>
                        <HiOutlineHome color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p>Home</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={110}>
                        <RiMovieFill color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p>Course</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={105}>
                        <FaTrailer color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p>Starter</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={158}>
                        <MdSubscriptions color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p>Subscription</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={130}>
                        <AiFillHeart color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p>Favourite</p></Text>
                    </Box>
                </Link>
            </Navbar.Section>


            <Navbar.Section>

                <Divider my="sm" labelPosition="center"
                    label={<FaUserCircle size={36} />} />

                <Link href="/">
                    <Box className="li" maw={210}>
                        <CgArrowsExchange color={dark ? '#339af0' : '#339af0'} size={36} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p>Change Account</p></Text>

                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={120}>
                        <AiOutlineLogout size={30} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p>Logout</p></Text>
                    </Box>
                </Link>

            </Navbar.Section>
        </Navbar>
    )
}

export default sideNav