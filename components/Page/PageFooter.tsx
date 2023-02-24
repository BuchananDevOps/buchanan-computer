import Link from "next/link"
import { FC } from "react"

import { Grid, Page, Text } from "@geist-ui/core"

const PageFooter: FC = () => {
  return (
    <Page.Footer
      style={{
        position: "initial",
        padding: "1rem 0",
      }}
    >
      <Grid.Container
        alignContent="center"
        alignItems="center"
        direction="column"
        gap={0}
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Grid>
          <Text b span font={0.875}>
            <Link href="/" rel="noopener noreferrer" target="_blank">
              Buchanan Computer
            </Link>
          </Text>
        </Grid>
      </Grid.Container>
    </Page.Footer>
  )
}

export default PageFooter
