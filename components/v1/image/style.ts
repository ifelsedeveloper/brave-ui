/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { ImageProps } from './index'
import { setTheme } from '../../helpers'

const StyledPicture = styled.picture`
  max-width: ${(p: ImageProps) => setTheme(p.theme, 'maxWidth')};
  min-width: ${(p: ImageProps) => setTheme(p.theme, 'minWidth')};
  width: ${(p: ImageProps) => setTheme(p.theme, 'width')};
  height: ${(p: ImageProps) => setTheme(p.theme, 'height')};
  min-height: ${(p: ImageProps) => setTheme(p.theme, 'minHeight')};
  margin: ${(p: ImageProps) => setTheme(p.theme, 'margin')};
  padding: ${(p: ImageProps) => setTheme(p.theme, 'padding')};
  box-sizing: border-box;
  display: block;
` as any

const StyledFigure = styled.figure`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  margin: 0;
` as any

const StyledFigcaption = StyledFigure.withComponent('figure')

const StyledImage = StyledFigure.withComponent('img')

export {
  StyledPicture,
  StyledFigure,
  StyledFigcaption,
  StyledImage
}
