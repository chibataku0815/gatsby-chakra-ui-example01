import { Container, Text } from '@chakra-ui/layout'
import anime from 'animejs'
import React, { useEffect } from 'react'
import Anime from 'react-anime'

const IndexPage = () => {
  useEffect(() => {
    return () => {}
  }, [])

  anime({
    targets: '#anime',
    translateX: 250,
  })

  let colors = ['blue', 'green', 'red']

  return (
    <>
      <Container
        w="100vw"
        h="100vh"
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Anime delay={anime.stagger(600)} scale={[0.1, 0.9]}>
          {colors.map((color, i) => (
            <Text
              key={i}
              style={{
                color: color,
              }}
            >
              Samples
            </Text>
          ))}
        </Anime>
      </Container>
    </>
  )
}

export default IndexPage
