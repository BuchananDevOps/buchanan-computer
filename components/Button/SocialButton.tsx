import { FC } from "react"

import { Button, ButtonProps } from "@geist-ui/core"
import { styled } from "@stitches/react"

const StyledSocialButton = styled(Button, {})

interface SocialButtonProps extends ButtonProps {
  icon?: React.ReactNode
  link?: string
}

const SocialButton: FC<SocialButtonProps> = ({ icon, link, ...props }) => {
  return <StyledSocialButton icon={icon} {...props} />
}

export default SocialButton
