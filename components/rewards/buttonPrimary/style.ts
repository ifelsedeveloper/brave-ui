/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Color, Props, Size } from './index'

const getColor = (color: Color, disabled: boolean) => {
  let colorCode = ''

  if (disabled) {
    return '#DFDFE8'
  }

  switch (color) {
    case 'brand':
      colorCode = '251, 84, 43'
      break
    case 'action':
      colorCode = '76, 84, 210'
      break
  }

  return colorCode
}

const generateWrapper = (size: Size) => {
  switch (size)  {
    case 'large':
      return css`
        font-size: 14px;
        border-radius: 24px;
        min-width: 116px;
      `
    case 'medium':
      return css`
        font-size: 13px;
        border-radius: 20px;
        min-width: 104px;
      `
    case 'small':
      return css`
        font-size: 11px;
        border-radius: 16px;
        min-width: 88px;
      `
  }

  return ``
}

const generateContent = (size: Size, color: Color, disabled: boolean) => {
  const colorCode = getColor(color, disabled)

  let props = `
    background: rgba(${colorCode}, 0.9);
    color: #fff;
    
    :hover {
      background: rgba(${colorCode}, 1);
    }
    
    :active {
      background: rgba(${colorCode}, 0.4);
    }
  `

  if (disabled) {
    props = `
      background: ${colorCode};
      color: #fff;
    `
  }

  let padding = ``
  switch (size)  {
    case 'large':
      padding =`
        padding: 17px 15px;
      `
      break
    case 'medium':
      padding =`
        padding: 13.5px 10px;
      `
      break
    case 'small':
      padding =`
        padding: 10.5px 10px;
      `
      break
  }

  return css`
    ${props}
    ${padding}
  `
}

export const StyledWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  background: #fff;
  ${(p: Props) => generateWrapper(p.size)};
  font-family: Poppins;
` as any

export const StyledContent = styled.div`
  text-align: center;
  box-sizing: border-box;
  letter-spacing: 0;
  font-weight: 600;
  line-height: 1;
  cursor: ${(p: Props) => p.disabled ? 'default' : 'pointer'};
  user-select: none;
  ${(p: Props) => generateContent(p.size,p.color, (p.disabled || false))};
` as any

export const StyledIcon = styled.span`
  display: inline-block;
  vertical-align: bottom;
  margin: ${(p: Props) => p.icon && p.icon.position === 'left' ? '0 10px 0 0' : '0 0 0 10px'};
` as any
