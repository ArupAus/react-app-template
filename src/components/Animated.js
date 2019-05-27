import React from 'react'
import styled from '@emotion/styled'
import { Motion, spring } from 'react-motion'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const AnimatedExample = styled.div`
  font-size: ${props => `${props.motion}px` || '14px'};
`

const Animated = () => (
  <Container>
    <Motion defaultStyle={{ x: 14 }} style={{ x: spring(34) }}>
      {style => (
        <AnimatedExample motion={style.x}>
          Here is an animated example
        </AnimatedExample>
      )}
    </Motion>
  </Container>
)

export default Animated
