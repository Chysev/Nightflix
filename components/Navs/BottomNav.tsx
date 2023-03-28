import Link from "next/link"
import { FaTrailer } from "@react-icons/all-files/fa/FaTrailer"
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'
import { RiMovieFill } from "@react-icons/all-files/ri/RiMovieFill"
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { MdSubscriptions } from "@react-icons/all-files/md/MdSubscriptions"
import { Box, Text, useMantineColorScheme } from "@mantine/core"

function BottomNav() {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <Box style={{ boxShadow: `${dark ? '0 0 1px white' : '0 0 1px black'}`, backgroundColor: `${dark ? '#1a1b1e' : '#fff'}` }} className="bottomnav">
            <footer>

                <Link href="/">
                    <Box className="li" >
                        <HiOutlineHome color={dark ? '#339af0' : '#339af0'} size={28} />
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" >
                        <RiMovieFill color={dark ? '#339af0' : '#339af0'} size={28} />
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" >
                        <FaTrailer color={dark ? '#339af0' : '#339af0'} size={28} />
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li" >
                        <MdSubscriptions color={dark ? '#339af0' : '#339af0'} size={28} />
                    </Box>
                </Link>

                <Link href="/">
                    <Box className="li">
                        <AiFillHeart color={dark ? '#339af0' : '#339af0'} size={28} />
                    </Box>
                </Link>
            </footer>
        </Box>
    )
}

export default BottomNav