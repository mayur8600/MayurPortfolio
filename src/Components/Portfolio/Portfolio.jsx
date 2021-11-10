import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Typewriter from "typewriter-effect";
import profilepic from "../Images/Profile_5.png"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Portfolio = () => {
    return (
        <>
        <Container id="home" maxWidth="xl" className={styles.contain}>
            <div className={styles.badge}>
                <img style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="Mayur Kamthe" src={profilepic}/>
            </div>
            <Box className={styles.name}>
                <h2>Mayur Kamthe</h2>
            </Box>
            <Box className={styles.typebox}>
                <h2>
                <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter, options)=> {

                            typewriter
                            
                            .typeString("Full Stack Web Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </h2>
            </Box>
            <Box className={styles.name}>
                <p>Aspiring Full-Stack Web Developer, with hands-on experience in solving numerous DSA problems. Trained in MERN Stack and proficient in working with React, dedicated to build pixel-perfect websites.
I am proactive and a natural problem-solver, looking forward to start my journey with an exciting and challenging organization.
                </p>
            </Box>
        </Container>
        </>
    )
}

export {Portfolio}
