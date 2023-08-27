import { DesignTokens, DesignToken } from '../types'
import { Options } from './types'
import { defOptions } from './defs'
import { composition } from './parsers'

const parseStyleToken = (
  tokens: DesignTokens,
  { value, type }: DesignToken,
  { set }: Options = defOptions
) => {
  switch (type) {
    case 'composition': return composition(tokens, value, set)
    default: return {}
  }
}

export default parseStyleToken
