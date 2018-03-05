import React from 'react'

import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-router'

import Header from 'components/layout/Header'
import Nav from 'components/layout/nav/Nav'
import ScrollY from 'utils/ScrollY'

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('normal', () => (
    <Header>
      <Nav />
    </Header>
  ))
  .add('humble', () => (
    <Header scrollY={99}>
      <Nav />
    </Header>
  ))
  .add('responsive', () => (
    <div>
      <ScrollY>
        <Header>
          <Nav />
        </Header>
      </ScrollY>
      <div style={{
        border: '1px solid black',
        left: '50%',
        margin: '0 auto',
        position: 'absolute',
        textAlign: 'center',
        top: '180px',
        transform: 'translateX(-50%)',
        width: '50vw'
      }}>
        Scroll until here
      </div>
    </div>
  ))
