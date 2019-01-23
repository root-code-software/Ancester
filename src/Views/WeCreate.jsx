import React from 'react'
import { Header, Container, Segment, Image, Grid } from "semantic-ui-react";
import Globe from '../Assets/img/WeCreate/globo.svg'
import Services from '../Assets/img/WeCreate/servicios.svg'
import Description from '../Assets/img/WeCreate/descripcion.svg'
import Step1 from '../Assets/img/WeCreate/paso1.svg'
import Step2 from '../Assets/img/WeCreate/paso2.svg'
import Step3 from '../Assets/img/WeCreate/paso3.svg'

const WeCreate = () => {
    return (
        <Container fluid
            style={{ 
                backgroundColor: 'rgb(48, 45, 88)', 
                minHeight: '90%', 
                height:'100%', 
                marginBottom: '50px'
            }}
        >
            <div style={{
                backgroundImage: "url(" + Globe + ")",
                backgroundRepeat: 'no-repeat',
                minHeight: '50%',
                height: '300px'
            }}>
                <Container text>
                    <br />
                    <Header as='h1' inverted textAlign='center'><b>CREAMOS TU WEB GAMER</b></Header>
                    <Grid centered>
                        <Image src={Description} height='200' />
                    </Grid>
                </Container>
            </div>
            <div>
                <Header as='h3' inverted textAlign='center'>REQUISITOS</Header>
                <Grid columns={3} doubling padded relaxed='very'>
                    <Grid.Column>
                        <Segment style={{ backgroundColor: 'rgb(102, 96, 163)' }} inverted>
                            <Image src={Step1} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment style={{ backgroundColor: 'rgb(102, 96, 163)' }} inverted>
                            <Image src={Step2} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment style={{ backgroundColor: 'rgb(102, 96, 163)' }} inverted>
                            <Image src={Step3} />
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid centered>
                    <Image src={Services} height='150'/>
                </Grid>
                <Container text>
                <br/>
                <Segment style={{ backgroundColor: 'rgb(42, 39, 77)' }} inverted>
                            Para mas informacion
                </Segment>
                </Container>
                <br/>
                <br/>
            </div>
        </Container>
    )
}

export default WeCreate
