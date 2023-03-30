
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"
import { BiSun } from "@react-icons/all-files/bi/BiSun";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { IoMdSettings } from "@react-icons/all-files/io/IoMdSettings"
import { ActionIcon, Avatar, Box, Button, Paper, Popover, Text, useMantineColorScheme } from "@mantine/core"


function IsAuth() {

    // Session
    const { data: session } = useSession()

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

                <Popover width={300} radius="md" position="bottom-end" withArrow>
                    <Popover.Target>
                        <div className="right">
                            <IoMdSettings size={36} />
                        </div>
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

                            <Button onClick={() => signOut()} variant="default" fullWidth mt="md">
                                Sign Out
                            </Button>
                        </Paper>
                    </Popover.Dropdown>
                </Popover>
            </nav>
        </Box>
    )
}

export default IsAuth