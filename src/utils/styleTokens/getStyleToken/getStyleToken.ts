import { DesignTokens } from '../types'
import { Options } from './types'
import { defOptions } from './defs'

const getStyleToken = (
  designTokens: DesignTokens,
  { set, type }: Options = defOptions
) => {
  return designTokens[set][type]
}

export default getStyleToken
