import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import { Box, Button, Stack, Typography } from "@mui/joy";
import { ArrowForward, ArrowOutward } from "@mui/icons-material";
import { getColorScheme } from "../service";


function HeroSection() {
    return (
        <HeroSectionStyle>
            <NavigationBar />

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} sx={{ minHeight: '100vh', backgroundImage: 'url("https://placehold.co/1920/1020/000/41414191")' }}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={1} p={2}
                    sx={{ border:'1px solid #bcbcbc5a', backgroundColor:`${getColorScheme().color3.backcolor}`, borderRadius:'150px'}}
                >
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', borderRadius: '200px', width: '50px', height: '30px', backgroundColor: `${getColorScheme().color1.secondary}` }}>New</Stack>
                    Automated Lead Generation
                </Box>
                <Typography level="h1" color="white" sx={{ fontSize: '85px', textAlign: 'center' }}>Intelligent Automation for Modern Businesses.</Typography>
                <Typography level="h4" fontWeight={'400'} color="white">Xtract brings AI automation to your fingertips & streamline tasks.</Typography>
                <Stack direction={'row'} gap={4}>
                    <Button endDecorator={<ArrowOutward />} sx={{ bgcolor: `${getColorScheme().color1.secondary}` }}>Get in touch</Button>
                    <Button color="neutral" variant="outlined" sx={{
                        color: 'white',
                        '&:hover': {
                            color: 'black',
                        }
                        , bgcolor: `${getColorScheme().color3.backcolor}`
                    }}>Get in touch</Button>
                </Stack>
            </Box>

        </HeroSectionStyle>
    )
}

const HeroSectionStyle = styled.div`
  /* border: 1px solid white; */
  min-height: 100vh;
`;

export default HeroSection