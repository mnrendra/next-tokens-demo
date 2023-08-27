"use client"
import { tw } from '@/utils'
import { getStyleToken, parseStyleToken } from '@/utils/styleTokens'
import { tokens } from '@/tokens'
import { Props } from './types'

const Button = ({
  text
}: Props) => {
  const { button } = getStyleToken(tokens)

  return (
    <button
      // className={tw(
      //   'h-9',
      //   'px-4',
      //   'py-2',
      //   'm-2',
      //   'font-medium',
      //   'text-sm',
      //   'text-rose-50',
      //   'bg-rose-500',
      //   'hover:bg-rose-700',
      //   'rounded-md',
      //   'shadow-sm',
      //   'hover:shadow-md',
      //   'shadow-black',
      //   'hover:shadow-black',
      //   'cursor-pointer'
      // )}
      style={parseStyleToken(tokens, button.primary)}
    >
      {text}
    </button>
  )
}

export default Button
