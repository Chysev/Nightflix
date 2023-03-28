
import { BiSun } from "@react-icons/all-files/bi/BiSun";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { IoMdSettings } from "@react-icons/all-files/io/IoMdSettings"
import { ActionIcon, Box, Text, useMantineColorScheme } from "@mantine/core"
import Link from "next/link";


function Topnav() {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';


    return (
        <Box style={{ boxShadow: `${dark ? '0 0 1px white' : '0 0 1px black'}`, backgroundColor: `${dark ? '#1a1b1e' : '#fff'}` }} className="topnav">
            <nav>
                <ActionIcon
                    className="left"
                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <BiSun size="1.1rem" /> : <BiMoon size="1.1rem" />}
                </ActionIcon>

                <Link className="middle" href="/">
                    <Text color={dark ? '#339af0' : '#339af0'} fz={14}>
                        <h1 className="font1 nightflix">NIGHTFLIX</h1>
                    </Text>
                </Link>

                <Link className="right" href="/settings">
                    <IoMdSettings size={36} className="righticon" />
                </Link>
            </nav>
        </Box>
    )
}

export default Topnav