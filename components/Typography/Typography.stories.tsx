import { text } from '@storybook/addon-knobs'
import React from 'react'

import Typography from '.'

export default {
  title: 'Components/Typography',
  component: Typography
}

export const Default = () => (
  <>
    <Typography sizeLargeDisplay="title-g" color="dark-medium" isBold>
      {text('Title G', 'Title G')}
    </Typography>
    <Typography sizeLargeDisplay="title-m" color="dark-medium">
      {text('Title M', 'Title M')}
    </Typography>
    <Typography sizeLargeDisplay="title-p" color="dark-medium" isBold>
      {text('Title P', 'Title P')}
    </Typography>
    <Typography sizeLargeDisplay="body-g" color="dark-medium">
      {text('Body G', 'Body G')}
    </Typography>
    <Typography sizeLargeDisplay="body-m" color="dark-medium" isBold>
      {text('Body M', 'Body M')}
    </Typography>
    <Typography sizeLargeDisplay="body-p" color="dark-medium">
      {text('Body P', 'Body P')}
    </Typography>
    <Typography sizeLargeDisplay="body-pp" color="dark-medium" isBold>
      {text('Body PP', 'Body PP')}
    </Typography>
  </>
)
