import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

import Login from '../'

Enzyme.configure({ adapter: new EnzymeAdapter() })

interface FindByTestId {
  id: string
  wrapper: ShallowWrapper
}

const setupWrapper = () => shallow(<Login />)
const findByTestId = ({ wrapper, id }: FindByTestId) =>
  wrapper.find(`[data-testid='${id}']`)

test('render screen Login without errors', () => {
  const wrapper = setupWrapper()
  const screenLogin = findByTestId({ wrapper, id: 'screen-login' })

  expect(screenLogin.length).toBe(1)
})
