import { Box, Button, Card, CardCover, Stack, Typography } from "@mui/joy";
import styled from "styled-components";
import { getColorScheme } from "../service";


function OurProcess() {
    return (
        <OurProcessStyle>
            <Box pt={12}>
                <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Button className="feat-btn" variant="plain">Our Process</Button>
                    <Typography level="h1" sx={{ color: 'white', width: '500px', textAlign: 'center', paddingTop: '20px', fontSize: '50px' }}>Our Simple, Smart, and Scalable Process</Typography>
                    <Typography level="body-sm" color="neutral" sx={{ width: '500px', textAlign: 'center', paddingTop: '20px' }}>We design, develop, and implement automation tools that help you work smarter, not harder</Typography>
                </Stack>

                <Stack mt={3} justifyContent={'space-between'} width={'100%'} alignItems={'center'} px={40} py={5}>

                    {/* Card Set 1 */}
                    <Stack direction={'row'} gap={7}>
                        {/* card-1 */}
                        <Box border={1} height={357} width={400} borderRadius={6} sx={{ border: '1px solid #aaaaaa2d', backgroundColor: `${getColorScheme().color3.backcolor}`, padding: '15px' }}>
                            <Button disabled className="feat-btn" variant="plain" sx={{ fontSize: '11px' }}>Step 1</Button>
                            <Typography level="h2" pt={2} sx={{ color: 'white' }}>Smart Analyzing</Typography>
                            <Typography level="title-sm" color="neutral" pt={2}>We assess your needs and identify AI solutions to streamline workflows and improve efficiency.</Typography>
                            <Card variant="plain" sx={{ minWidth: 100, minHeight: '50%', marginTop: '20px' }}>
                                <CardCover>
                                    <img
                                        src="https://placehold.co/100/181a1f/aaaaaa2d"
                                        srcSet="https://placehold.co/100/181a1f/aaaaaa2d"
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                            </Card>
                        </Box>

                        {/* card-2 */}
                        <Box border={1} height={357} width={400} borderRadius={6} sx={{ border: '1px solid #aaaaaa2d', backgroundColor: `${getColorScheme().color3.backcolor}`, padding: '15px' }}>
                            <Button disabled className="feat-btn" variant="plain" sx={{ fontSize: '11px' }}>Step 2</Button>
                            <Typography level="h2" pt={2} sx={{ color: 'white' }}>AI Development</Typography>
                            <Typography level="title-sm" color="neutral" pt={2}>Our team builds intelligent automation systems tailored to your business processes.</Typography>
                            <Card variant="plain" sx={{ minWidth: 100, minHeight: '50%', marginTop: '20px' }}>
                                <CardCover>
                                    <img
                                        src="https://placehold.co/100/181a1f/aaaaaa2d"
                                        srcSet="https://placehold.co/100/181a1f/aaaaaa2d"
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                            </Card>
                        </Box>
                    </Stack>

                    {/* Card Set 2 */}
                    <Stack mt={4} direction={'row'} gap={7}>
                        {/* card-3 */}
                        <Box border={1} height={357} width={400} borderRadius={6} sx={{ border: '1px solid #aaaaaa2d', backgroundColor: `${getColorScheme().color3.backcolor}`, padding: '15px' }}>
                            <Button disabled className="feat-btn" variant="plain" sx={{ fontSize: '11px' }}>Step 3</Button>
                            <Typography level="h2" pt={2} sx={{ color: 'white' }}>Seamless Integration</Typography>
                            <Typography level="title-sm" color="neutral" pt={2}>We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.</Typography>
                            <Card variant="plain" sx={{ minWidth: 100, minHeight: '50%', marginTop: '20px' }}>
                                <CardCover>
                                    <img
                                        src="https://placehold.co/100/181a1f/aaaaaa2d"
                                        srcSet="https://placehold.co/100/181a1f/aaaaaa2d"
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                            </Card>
                        </Box>

                        {/* card-4 */}
                        <Box border={1} height={357} width={400} borderRadius={6} sx={{ border: '1px solid #aaaaaa2d', backgroundColor: `${getColorScheme().color3.backcolor}`, padding: '15px' }}>
                            <Button disabled className="feat-btn" variant="plain" sx={{ fontSize: '11px' }}>Step 4</Button>
                            <Typography level="h2" pt={2} sx={{ color: 'white' }}>Continuous Optimization</Typography>
                            <Typography level="title-sm" color="neutral" pt={2}>We refine performance, analyze insights, and enhance automation for long-term growth.</Typography>
                            <Card variant="plain" sx={{ minWidth: 100, minHeight: '50%', marginTop: '20px' }}>
                                <CardCover>
                                    <img
                                        src="https://placehold.co/100/181a1f/aaaaaa2d"
                                        srcSet="https://placehold.co/100/181a1f/aaaaaa2d"
                                        loading="lazy"
                                        alt=""
                                    />
                                </CardCover>
                            </Card>
                        </Box>
                    </Stack>

                </Stack>
            </Box>
        </OurProcessStyle>
    )
}

const OurProcessStyle = styled.div`
  .feat-btn{
    outline: 1px solid #aaaaaa2d;
    color: #ffffff;
  }
`;

export default OurProcess