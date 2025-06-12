import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import {AppBar, Link, Toolbar, Typography} from "@mui/material";

function NavBar() {

    return (
        <AppBar sx={{ height:"5vh", backgroundColor: 'rgba(256,256,256,.5)', backdropFilter: 'blur(5px)'}} elevation={0}>
            <Toolbar
                variant="dense"
                disableGutters
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    marginX: "1rem",
                    height: "100%",
                }}
            >
                <Typography fontSize={"3vmin"} color="black" marginRight={"auto"} fontFamily="'Paytone One', sans-serif">Brandon de Baroncelli</Typography>
                <Link href="https://www.linkedin.com/in/bdebaro" target="_blank">
                    <LinkedIn fontSize="large" sx={{color: "black"}}/>
                </Link>
                <Link href="mailto:brbaroncelli@gmail.com">
                    <Email fontSize="large"  sx={{color: "black"}}/>
                </Link>
                <Link href="https://github.com/BrandonDeB" target="_blank" >
                    <GitHub fontSize="large" sx={{color: "black"}}/>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;