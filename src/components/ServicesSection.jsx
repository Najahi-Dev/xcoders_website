import { Box, Button, Card, CardCover, Stack, Typography } from "@mui/joy";
import styled from "styled-components";
import { getColorScheme } from "../service";



function ServicesSection() {
    return (
        <ServicesSectionStyle>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={5} flexDirection={'column'} gap={5}>
                <Stack direction={'column'} display={'flex'} sx={{ width: '55%' }} justifyContent={'center'} alignItems={'center'} gap={3} p={2}>
                    <Button out variant="outlined"
                        sx={{ color: `${getColorScheme().color3.color}` }}
                        color="neutral"
                        disabled
                    >Our services</Button>
                    <Typography color="white" textAlign={'center'} level="h1" sx={{ fontSize: '55px' }}>AI Solutions That Take Your Business to the Next Level</Typography>
                    <Typography color="neutral" textAlign={'center'} level="h4">We design, develop, and implement automation tools that help you work smarter, not harder</Typography>
                </Stack>

                <Stack justifyContent={'center'} alignItems={'center'} display={'flex'} height={'400px'} direction={'row'} gap={20}>

                    <Card variant="plain" sx={{ minWidth: 500, minHeight: '88%' }}>
                        <CardCover>
                            <img
                                src="https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg"
                                srcSet="https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg"
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                    </Card>


                    <Stack width={550}>
                        <Button className="feat-btn" out variant="plain"

                            sx={{ color: `${getColorScheme().color3.color}`, width: '190px' }}
                            color="neutral"
                            disabled
                        >Workflow Automation</Button>

                        <Typography pt={4} level="h1" sx={{ color: 'white', fontWeight: '500' }}>Automate repetitive tasks</Typography>
                        <Typography level="body-lg" sx={{ color: 'white', fontWeight: '400' }}>We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains  saving time and cutting down errors.</Typography>

                        <Stack direction={'row'} gap={3} pt={3}>
                            <Button className="feat-btn" out variant="plain"

                                sx={{ color: `${getColorScheme().color3.color}`, width: '190px' }}
                                color="neutral"
                                disabled
                            >Internal Task Bots</Button>
                            <Button className="feat-btn" out variant="plain"
                                sx={{ color: `${getColorScheme().color3.color}`, width: '190px' }}
                                color="neutral"
                                disabled
                            >100+ Automations</Button>
                        </Stack>

                    </Stack>
                </Stack>
            </Box>

            <Box p={6}>
                <Stack justifyContent={'center'} alignItems={'center'} display={'flex'} height={'400px'} direction={'row'} gap={10}>
                    <Stack width={550}>
                        <Button className="feat-btn" out variant="plain"

                            sx={{ color: `${getColorScheme().color3.color}`, width: '190px' }}
                            color="neutral"
                            disabled
                        >AI Assistant</Button>

                        <Typography pt={4} level="h1" sx={{ color: 'white', fontWeight: '500' }}>Delegate Daily Tasks</Typography>
                        <Typography level="body-lg" sx={{ color: 'white', fontWeight: '400' }}>From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.</Typography>

                        <Stack direction={'row'} gap={3} pt={3}>
                            <Button className="feat-btn" out variant="plain"

                                sx={{ color: `${getColorScheme().color3.color}` }}
                                color="neutral"
                                disabled
                            >Summaries</Button>
                            <Button className="feat-btn" out variant="plain"
                                sx={{ color: `${getColorScheme().color3.color}`}}
                                color="neutral"
                                disabled
                            >Scheduling</Button>
                            <Button className="feat-btn" out variant="plain"
                                sx={{ color: `${getColorScheme().color3.color}`}}
                                color="neutral"
                                disabled
                            >Many more</Button>
                        </Stack>

                    </Stack>

                    <Card variant="plain" sx={{ minWidth: 500, minHeight: '88%' }}>
                        <CardCover>
                            <img
                                src="https://i.pinimg.com/736x/db/26/18/db261825c698d6a982262c34e4db4755.jpg"
                                srcSet="https://i.pinimg.com/736x/db/26/18/db261825c698d6a982262c34e4db4755.jpg"
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                    </Card>
                </Stack>
            </Box>
        </ServicesSectionStyle>
    )
}

const ServicesSectionStyle = styled.div`
  .feat-btn{
    outline: 1px solid #aaaaaa2d;
  }
`;

export default ServicesSection