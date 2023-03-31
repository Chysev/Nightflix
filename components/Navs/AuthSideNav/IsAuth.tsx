import Link from "next/link"
import { BiSun } from '@react-icons/all-files/bi/BiSun'
import { BiMoon } from '@react-icons/all-files/bi/BiMoon'
import { useSession, signOut, signIn } from "next-auth/react"
import { FaTrailer } from "@react-icons/all-files/fa/FaTrailer"
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'
import { RiMovieFill } from "@react-icons/all-files/ri/RiMovieFill"
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { MdSubscriptions } from "@react-icons/all-files/md/MdSubscriptions"
import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout"
import { CgArrowsExchange } from '@react-icons/all-files/cg/CgArrowsExchange'
import { ActionIcon, Box, Divider, Navbar, useMantineColorScheme, Text, Avatar, Popover, Button, Paper, ScrollArea } from "@mantine/core"

function IsAuth() {

    // Session
    const { data: session } = useSession()

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Navbar className="sidenav" fixed={true} maw={290}>

            {/* Header */}
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

            {/* Nav */}
            <Navbar.Section className="sideicons" grow component={ScrollArea}>
                <Link href="/">
                    <Box className="li" maw={102}>
                        <HiOutlineHome color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p className="font2">Home</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={110}>
                        <RiMovieFill color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p className="font2">Course</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={106}>
                        <FaTrailer color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p className="font2">Starter</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={162}>
                        <MdSubscriptions color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p className="font2">Subscription</p></Text>
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" maw={130}>
                        <AiFillHeart color={dark ? '#339af0' : '#339af0'} size={28} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p className="font2">Favourite</p></Text>
                    </Box>
                </Link>
            </Navbar.Section>



            {/* Footer */}

            <Navbar.Section>


                <Popover width={300} radius="md" position="top" withArrow>
                    <Popover.Target>
                        <Divider my="sm" labelPosition="center"
                            label={<Avatar className="avatar" src={session?.user?.image || undefined} size={45} radius={120} mx="auto" />} />
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Paper
                            radius="md"
                            withBorder
                            p="lg"
                            sx={(theme) => ({
                                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
                            })}
                        >
                            <Avatar src={session?.user?.image || undefined} size={120} radius={120} mx="auto" />
                            <Text className="font2" ta="center" fz="lg" weight={500} mt="md">
                                {session?.user?.name}
                            </Text>
                            <Text className="font2" ta="center" c="dimmed" fz="sm">
                                {session?.user?.email} • NIGHTFLIX
                            </Text>

                        </Paper>
                    </Popover.Dropdown>
                </Popover>


                <Link href="/">
                    <Box onClick={() => signIn()} className="li" maw={210}>
                        <CgArrowsExchange color={dark ? '#339af0' : '#339af0'} size={36} />
                        <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p className="font2">Change Account</p></Text>
                    </Box>
                </Link>

                <Box onClick={() => signOut()} className="li" maw={135}>
                    <AiOutlineLogout color={dark ? '#339af0' : '#339af0'} size={30} />
                    <Text color={dark ? '#c1c2c5' : '#495057'} fz={22}><p className="font2">Sign Out</p></Text>
                </Box>

            </Navbar.Section>
        </Navbar >
    )
}

export default IsAuth