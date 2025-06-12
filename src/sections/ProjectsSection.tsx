import {NavigateNext, ReadMore} from "@mui/icons-material";
import {Box, Container, IconButton, Typography} from "@mui/material";
import {useState} from "react";

function ProjectsSection(){

    const [currentProject, setCurrentProject] = useState(0);

    function handleNextClick(){
        console.log((currentProject + 1) % 3);
        setCurrentProject((currentProject + 1) % 3);
    }

    function handleReadMore() {
        if (currentProject === 1) {
            window.open("http://blog.bdebaro.me/posts/Toga/");
        } else if (currentProject === 0) {
            window.open("http://blog.bdebaro.me/posts/Hydribbit/");
        } else {
            window.open("http://blog.bdebaro.me/posts/SongGuessr/");
        }
    }

    return (
        <Container disableGutters maxWidth={false} sx={{ width: "100vw", height: "100vh", backgroundColor: "#567C57", position: "relative", overflow: "hidden", alignContent: "center" }}>
            <Typography textAlign={"center"} fontSize={"12vmin"} color="white" marginTop={"-5rem"} fontFamily="'Paytone One', sans-serif" fontWeight={"bolder"}>Projects</Typography>
            <Container disableGutters maxWidth={false} sx={{ width: "95%", height: "80%", backgroundColor: "#567C57", position: "relative", overflow: "hidden" }}>
                {currentProject === 0 && (
                    <Container
                        maxWidth={false}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '100%',
                            backgroundImage: `
                          linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 0.0) 60%),
                          linear-gradient(to top, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 0.0) 20%),
                          url(/swamp.jpg)
                        `,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                        }}
                    >
                        <Typography
                            color="#00DB37"
                            letterSpacing="-1vmin"
                            fontFamily="'Golos Text', sans-serif"
                            align="center"
                            fontSize="18vmin"
                            fontWeight="bolder"
                            marginTop="-1vh"
                            maxWidth={"100%"}
                        >
                            Hydribbit
                        </Typography>
                        <Box
                            component="img"
                            src="/FrogHat.png"
                            sx={{
                                height: '40vh',
                                width: 'auto',
                                alignSelf: 'center',
                                marginTop: '-2rem'
                            }}
                        />
                        <Typography
                            color="#00DB37"
                            fontSize="7vmin"
                            fontWeight="bolder"
                            fontFamily="'Golos Text', sans-serif"
                        >
                            For the sake of{' '}
                            <Box component="span" sx={{ color: '#5FC1FF' }}>
                                Water
                            </Box>
                        </Typography>
                    </Container>
                )}

                {currentProject === 1 && (
                    <Container
                        maxWidth={false}
                        sx={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: "url(/troy-university-fraternity-row-modified.png)",
                            backgroundSize: "cover",
                            position: "relative"
                        }}
                    >
                        <Typography fontSize={"10rem"} color="white" fontFamily="'Gantari', sans-serif" fontWeight={"bolder"} letterSpacing={"-.5rem"}>
                            Toga
                        </Typography>
                        <Typography lineHeight={"1rem"} fontSize={"1rem"} color="white" fontFamily="'Gantari', sans-serif" fontWeight={"bolder"}>
                            Brandon de Baroncelli, Landon Rohr, Austin Burke, Cory Winfrey, Bruce Brown
                        </Typography>
                        <Typography fontSize={"10vmin"} color="white" fontFamily="'Gantari', sans-serif" fontWeight={"bolder"} maxHeight={"20vh"} maxWidth={"auto"} letterSpacing={"-.5vmin"}>
                            Event Shopping
                        </Typography>
                        <Typography lineHeight={"1rem"} fontSize={"10vmin"} color="white" fontFamily="'Gantari', sans-serif" fontWeight={"bolder"} maxHeight={"20vh"} maxWidth={"auto"} letterSpacing={"-.5vmin"}>
                            Made Easy
                        </Typography>
                        <Box component="img" src={"./Toga Vector.svg"} sx={{ opacity: "90%", width: "auto", height: "30vh", bottom: 0, left: 0, position: "absolute" }} />
                    </Container>
                )}

                {currentProject === 2 && (
                    <Container
                        disableGutters
                        maxWidth={false}
                        sx={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: "url(/Globe.png)",
                            backgroundSize: "cover",
                            backgroundPositionY: "top",
                            backgroundPositionX: "center",
                            position: "relative",
                            justifyContent: "space-between",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <Container sx={{marginLeft: 0, padding: 0}}>
                            <Typography color={"white"} fontFamily={"'Lexend', sans-serif"} fontSize={"3vmin"} paddingTop={"1rem"} fontWeight={"bolder"}>Team PPPPHMOOC Presents</Typography>
                            <Typography color={"white"} fontFamily={"'Lexend', sans-serif"} fontSize={"12vmin"} marginTop={"-4vmin"} fontWeight={"bolder"}>SongGuessr</Typography>
                        </Container>
                        <Container sx={{marginLeft: 0, padding: "2vmin"}}>
                            <Typography color={"white"} fontFamily={"'Lexend', sans-serif"} fontSize={"3vmin"} paddingTop={"1rem"} paddingX={"1rem"} fontWeight={"bolder"}>Built With</Typography>
                            <Box component={"img"} src={"./Spotify.png"} sx={{width: "10vh", height: "auto"}} />
                            <Box component={"img"} src={"./MusicBrainz.png"} sx={{width: "11vh", height: "auto"}} />
                        </Container>
                    </Container>
                )}

                <Container
                    disableGutters
                    sx={{
                        flexDirection: "column",
                        display: "flex",
                        position: "absolute",
                        bottom: "5%",
                        right: "5vw",
                        gap: "1rem",
                        width: "auto"
                    }}
                >
                    <IconButton onClick={handleReadMore} sx={{ backgroundColor: "white", width: "3rem", height: "3rem", borderRadius: "50%" }}>
                        <ReadMore sx={{ color: "black" }} fontSize={"large"} />
                    </IconButton>
                    <IconButton onClick={handleNextClick} sx={{ backgroundColor: "white", width: "3rem", height: "3rem", borderRadius: "50%" }}>
                        <NavigateNext sx={{ color: "black" }} fontSize={"large"} />
                    </IconButton>
                </Container>
            </Container>
        </Container>

    );
}
export default ProjectsSection;