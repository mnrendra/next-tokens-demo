export interface DesignTokenTypes {
  borderRadius: Record<string, any>,
  color: Record<string, any>,
  composition: Record<string, any>,
  spacing: Record<string, any>,
  typography: Record<string, any>,
}

export interface DesignTokens {
  global: DesignTokenTypes
}

export type DesignTokenSet = keyof DesignTokens

export type DesignTokenType = keyof DesignTokens[keyof DesignTokens]

export type DesignTokenValue = string | number | Record<string, any>

export interface DesignToken {
  value: DesignTokenValue,
  type: DesignTokenType
}
