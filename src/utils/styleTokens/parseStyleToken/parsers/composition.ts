import { CSSProperties } from 'react'
import { DesignTokens, DesignTokenSet, DesignTokenValue } from '../../types'

const composition = (
  tokens: DesignTokens,
  tokenValue: DesignTokenValue,
  set: DesignTokenSet
): CSSProperties => {
  const token = tokens[set]

  const parser = (obj: any, keys: string[]) => {
    let result = obj

    for (const key of keys) {
      result = result[key]
      if (result === undefined) return
    }

    return result.value;
  }

  const parseTokenValue = (token: any, obj: any) => {
    return Object.fromEntries(
      Object.keys(obj).map(key => [
        key === 'fill' ? 'background' : key,
        parser(token, obj[key].replace('{', '').replace('}', '').split('.'))
      ])
    );
  }

  const genericToken = parseTokenValue(token, tokenValue)
  const typographyToken = parseTokenValue(token, genericToken.typography)

  const styles = {
    ...genericToken,
    ...typographyToken
  }

  delete styles.typography

  return styles
}

export default composition
