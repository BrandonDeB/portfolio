import {Box, Button, Container, Typography} from "@mui/material";

function AboutSection() {

    function handleResumeDownload() {
        window.open("./Brandon de Baroncelli Resume.pdf");
    }

    return(
        <Container disableGutters maxWidth={false} sx={{ display:"flex", flexDirection:"row" ,width: "100vw", height:"auto", minHeight:"100vh", backgroundColor:"#FFB028", margin:0, padding:0}}>
            <Box
                alignItems="center"
                display="flex"
                justifyContent="center"
                width="50vw"
                bgcolor="#FFF9F0"
                position="relative"
            >
                <Box
                    component="img"
                    src="/DelicateArch.png"
                    sx={{
                        maxWidth: "80%",
                        maxHeight: "80%",
                        width: "auto",
                        height: "auto",
                    }}
                />
                <Box
                    component="img"
                    src="/bdebaroKeyboard.svg"
                    position="absolute"
                    right="2vmin"
                    top="2vmin"
                    sx={{
                        transform: "rotate(20deg)",
                        maxWidth: "30vmin",
                        maxHeight: "30vmin",
                        width: "auto",
                        height: "auto",
                    }}
                />
            </Box>
            <Box sx={{backgroundColor:"#FFB028", padding:"2vmin"}} alignItems={"center"} justifyContent={"center"} width={"50vw"} position={"relative"}>
                <Typography fontSize={"8vmin"} color="white" fontFamily="'Paytone One', sans-serif" fontWeight={"bolder"}>About Me</Typography>
                <Typography marginY={"2rem"} fontSize={"2vmin"} color="white" fontFamily="'Amiko', sans-serif" fontWeight={"normal"} display="block">
                    Hello! I'm Brandon de Baroncelli, a recent graduate from Louisiana State University, where I earned a Bachelor's degree in Computer Science with a minor in Mathematics. My academic journey has equipped me with a strong foundation in both theoretical and practical aspects of computing.
                </Typography>
                <Typography marginY={"2rem"} fontSize={"2vmin"} color="white" fontFamily="'Amiko', sans-serif" fontWeight={"normal"} display="block">
                    I'm proficient in Java, Python, and Rust, and I have hands-on experience with JavaScript and React for front-end development. My interests lie in software engineering and embedded development, and I'm eager to apply my skills to real-world challenges in these areas.
                </Typography>
                <Typography marginY={"2rem"} fontSize={"2vmin"} color="white" fontFamily="'Amiko', sans-serif" fontWeight={"normal"} display="block">
                    Beyond coding, I'm passionate about sports—both playing and watching. I enjoy playing baseball, basketball, and volleyball while also being an avid supporter of the LSU baseball and football teams.
                </Typography>
                <Typography marginY={"2rem"} fontSize={"2vmin"} color="white" fontFamily="'Amiko', sans-serif" fontWeight={"normal"} display="block">
                    I'm currently seeking opportunities to kickstart my career as a developer. If you're interested in collaborating or have opportunities that align with my skills and interests, feel free to reach out!
                </Typography>
                <Button onClick={handleResumeDownload} sx={{fontSize: "2vmin", color: "white", backgroundColor: "#FC6917"}} variant="text">Download My Resume!</Button>
            </Box>
        </Container>
    );
}

export default AboutSection;