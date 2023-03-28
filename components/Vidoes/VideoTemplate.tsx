
function VideoTemplate(props: any) {
    return (
        <iframe src={props.videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
}

export default VideoTemplate