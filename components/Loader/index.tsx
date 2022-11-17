import React from 'react'
import Typography from '@wiser/components/Typography'
import { Wrap } from '@wiser/components/Wrap'

import { Overlay, Box } from './styled'

const Loader = () => {
  return (
    <Overlay>
      <Box>
        <Wrap mb={1}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="32"
              strokeWidth="8"
              stroke="#693999"
              strokeDasharray="50.26548245743669 50.26548245743669"
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
              />
            </circle>
          </svg>
        </Wrap>

        <Typography size="body-m" isBold>
          Carregando...
        </Typography>
      </Box>
    </Overlay>
  )
}

export default Loader
