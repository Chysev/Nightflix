import { Box, TextInput } from "@mantine/core"
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"

// Component
import VideoTemplate from "../Vidoes/VideoTemplate"

function Layer1() {
    return (
        <div className="videocontainer">

            <Box maw={800} className="search">
                <TextInput type="search" placeholder="Whats on your mind?..." radius={24} icon={<BsSearch />} size="lg" className="input" />
            </Box>

            <Box className="videos">
                <VideoTemplate videolink="https://www.youtube.com/embed/bMknfKXIFA8?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/KjY94sAKLlw?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/3qBXWUpoPHo?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/1GNsWa_EZdw?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/ww94Jvi8JJo?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/UGBJHYpHPvA?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/nu_pCVPKzTk?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/30LWjhZzg50?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/jS4aFq5-91M?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/v_1iqtOnUMg?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/sWbUDq4S6Y8?rel=0" />
                <VideoTemplate videolink="https://www.youtube.com/embed/dL05DoJ0qsQ?rel=0" />
            </Box>
        </div>
    )
}

export default Layer1

