import { Circle, DarkMode, Home, ListAlt, Mail, Person, Person2, Psychology, Storefront, WbSunny } from "@mui/icons-material";
import { Avatar, Box, Chip, List, ListItemButton, ListItemDecorator, Stack, Switch, Typography } from "@mui/joy";
import styled from "styled-components";


function SideBar() {
    return (
        <SideBarStyle>

            {/* Side Bar */}
            <Box boxShadow={2} sx={{
                borderRight: '1px solid #aaaaaa2d',
                width: '250px',
                height: '100vh',
                left: 0,
                position: 'fixed',
                backgroundColor: '#181a1f66'
            }}>

                {/* Theme Switch */}
                <Stack sx={{ width: '100%' }} direction={'row-reverse'} p={2}>
                    <Switch variant="solid" size="lg" startDecorator={<WbSunny fontSize="small" />} endDecorator={<DarkMode fontSize="small" />} />
                </Stack>

                {/* Avatar */}
                <Stack mt={3} px={3} py={2} direction={'row'} gap={4} alignItems={'center'}>
                    <Avatar src="https://i.pinimg.com/736x/95/28/ef/9528ef11a4eee170ba91d1f779daaa78.jpg" alt="user" />
                    <Box>
                        <Typography level="h4" sx={{ color: 'white' }}>Antony Josh</Typography>
                        <Typography color="neutral" sx={{ fontSize: '12px' }}>Web & Brand Designer</Typography>
                    </Box>
                </Stack>

                {/* Status */}
                <Stack sx={{ mt: 2 }} px={2}>
                    <Chip startDecorator={<Circle fontSize="inherit" />} variant="soft" color="success" sx={{ backgroundColor: '#223a2f', color: '#08874e', fontSize: '11px' }}>Available for work</Chip>
                </Stack>

                {/* Navigation */}
                <Box p={3} mt={3}>
                    {/* Nav List */}
                    <List sx={{ gap: 2 }}>

                        <ListItemButton sx={{
                            color: 'white', borderRadius: '5px',
                            '&.Mui-selected': {
                                backgroundColor: '#814ac863',
                            }
                        }} selected={true}>
                            <ListItemDecorator><Home /></ListItemDecorator>
                            Home
                        </ListItemButton>

                        <ListItemButton selected={false} sx={{
                            color: 'white',
                            borderRadius: '5px',
                            // backgroundColor: '#181a1f66',
                            '&.Mui-selected': {
                                backgroundColor: '#814ac863',
                            }
                        }}>
                            <ListItemDecorator><Person /></ListItemDecorator>
                            About
                        </ListItemButton>

                        <ListItemButton selected={false} sx={{
                            color: 'white',
                            borderRadius: '5px',
                            // backgroundColor: '#181a1f66',
                            '&.Mui-selected': {
                                backgroundColor: '#814ac863',
                            }
                        }}>
                            <ListItemDecorator><ListAlt /></ListItemDecorator>
                            Projects
                        </ListItemButton>

                        <ListItemButton selected={false} sx={{
                            color: 'white',
                            borderRadius: '5px',
                            // backgroundColor: '#181a1f66',
                            '&.Mui-selected': {
                                backgroundColor: '#814ac863',
                            }
                        }}>
                            <ListItemDecorator><Storefront /></ListItemDecorator>
                            Products
                        </ListItemButton>

                        <ListItemButton selected={false} sx={{
                            color: 'white',
                            borderRadius: '5px',
                            // backgroundColor: '#181a1f66',
                            '&.Mui-selected': {
                                backgroundColor: '#814ac863',
                            }
                        }}>
                            <ListItemDecorator><Psychology /></ListItemDecorator>
                            Thoughts
                        </ListItemButton>

                        <ListItemButton selected={false} sx={{
                            color: 'white',
                            borderRadius: '5px',
                            // backgroundColor: '#181a1f66',
                            '&.Mui-selected': {
                                backgroundColor: '#814ac863',
                            }
                        }}>
                            <ListItemDecorator><Mail /></ListItemDecorator>
                            Contact
                        </ListItemButton>


                    </List>
                </Box>

                {/* Bottom Bar */}

            </Box>


            {/* Main Content */}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} px={2} py={2} width={'1552px'} sx={{
                position: 'fixed',
                overflowY: 'auto',
                right: 0,
                left: '250px',
                height: '100vh',
            }}>
                <h1>Main Content</h1>
            </Box>

        </SideBarStyle>
    )
}

const SideBarStyle = styled.div`

`;

export default SideBar