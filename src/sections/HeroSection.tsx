import {Typography, Container, Box} from "@mui/material";

function HeroSection() {
    return (
        <Container
            maxWidth={false}
            sx={{
                width: "100vw",
                height: "100vh",
                margin: 0,
                backgroundImage: "url(./flowerBoy.png)",
                backgroundSize: "cover",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Centered Typography */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    marginTop: "2rem"
                }}
            >
                <Typography
                    sx={{
                        textShadow: "1vw 1vh 0 rgba(65, 74, 18, 1)",
                        letterSpacing: "2vw",
                        fontSize: "15vw",
                        color: "#567C57",
                        fontFamily: "'Paytone One', sans-serif",
                        fontWeight: "bolder",
                        textAlign: "center",
                    }}
                >
                    Software Engineer
                </Typography>
            </Box>

            {/* Headshot Image */}
            <Box
                component="img"
                src="/Headshot_removebg.png"
                sx={{
                    width: "auto",
                    height: "70vh",
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    transform: "translateX(-50%)",
                    zIndex: 10,
                }}
            />
        </Container>
    );
}

export default HeroSection;