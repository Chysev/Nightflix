import React, { useState } from "react";
import { Box, TextInput } from "@mantine/core";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

// Component
import VideoTemplate from "../Vidoes/VideoTemplate";

function Layer1() {
    const [searchQuery, setSearchQuery] = useState("");

    const videos = [
        {
            videolink: "https://www.youtube.com/embed/bMknfKXIFA8?rel=0",
            title: "React",
        },
        {
            videolink: "https://www.youtube.com/embed/KjY94sAKLlw?rel=0",
            title: "Next",
        },
        {
            videolink: "https://www.youtube.com/embed/3qBXWUpoPHo?rel=0",
            title: "Angular"
        },
        {
            videolink: "https://www.youtube.com/embed/1GNsWa_EZdw?rel=0",
            title: "Vue"
        },
        {
            videolink: "https://www.youtube.com/embed/ww94Jvi8JJo?rel=0",
            title: "Nuxt"
        },
        {
            videolink: "https://www.youtube.com/embed/UGBJHYpHPvA?rel=0",
            title: "Svelte"
        },
        {
            videolink: "https://www.youtube.com/embed/nu_pCVPKzTk?rel=0",
            title: "HTML CSS"
        },
        {
            videolink: "https://www.youtube.com/embed/30LWjhZzg50?rel=0",
            title: "TypeScript"
        },
        {
            videolink: "https://www.youtube.com/embed/jS4aFq5-91M?rel=0",
            title: "JavaScript"
        },
        {
            videolink: "https://www.youtube.com/embed/v_1iqtOnUMg?rel=0",
            title: "GitHub"
        },
        {
            videolink: "https://www.youtube.com/embed/sWbUDq4S6Y8?rel=0",
            title: "Linux"
        },
        {
            videolink: "https://www.youtube.com/embed/dL05DoJ0qsQ?rel=0",
            title: "Distro"
        }

    ];

    const filteredVideos = videos.filter((video) => {
        const query = searchQuery.toLowerCase();
        const title = video.title.toLowerCase();
        return title.includes(query);
    });

    return (
        <div className="videocontainer">
            <Box maw={800} className="search">
                <TextInput
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    type="search"
                    placeholder="What's on your mind?..."
                    radius={24}
                    icon={<BsSearch />}
                    size="lg"
                    className="input"
                />
            </Box>

            <Box className="videos">
                {filteredVideos.map((video) => (
                    <VideoTemplate
                        key={video.videolink}
                        videolink={video.videolink}
                        title={video.title}
                    />
                ))}
            </Box>
        </div>
    );
}

export default Layer1;
