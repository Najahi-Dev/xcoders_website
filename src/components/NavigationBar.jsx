import { Code } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/joy";
import styled from "styled-components";
import { getColorScheme } from "../service";
// import { Box } from "@mui/material";


function NavigationBar() {
    return (
        <NavigationBarStyle>
            <Box component={'nav'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={2} boxShadow={2}
                sx={{
                    minWidth: '100%', borderBottom: '1px solid #c2c2c242', position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    backgroundColor: `${getColorScheme().color1.backcolor}`
                }}>

                {/* LOGO */}
                <Stack color={'white'} display={'flex'} gap={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Code sx={{ fontSize: '45px' }} />
                    <Typography level="h2" color="white">XCODERS</Typography>
                </Stack>

                {/* NAVIGATION LINKS */}
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={4}>
                    <Box display={'flex'} direction={'row'} gap={3} fontWeight={600} sx={{ cursor: 'pointer' }}>
                        <Typography color="white" level="h5">Home</Typography>
                        <Typography color="white" level="h5">About</Typography>
                        <Typography color="white" level="h5">Blog</Typography>
                        <Typography color="white" level="h5">Contact</Typography>
                    </Box>
                    <Button sx={{ backgroundColor: `${getColorScheme().color1.secondary}` }}>Book a call</Button>
                </Stack>
            </Box>
        </NavigationBarStyle>
    )
}

const NavigationBarStyle = styled.div`

`;

export default NavigationBar