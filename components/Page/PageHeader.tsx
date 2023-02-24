import { useRouter } from "next/router"
import { FC } from "react"

import { Grid, Page, Text } from "@geist-ui/core"

import packageData from "@/package.json"

const PageHeader: FC = () => {
  const router = useRouter()
  return (
    <Page.Header center>
      <Grid.Container alignItems="center" gap={1} justify="space-between">
        <Grid sm>
          <Grid.Container alignItems="center" gap={1}>
            <Grid>
              <Text
                b
                span
                font={1.25}
                margin={0}
                style={{ display: "block", cursor: "pointer" }}
                onClick={() => {
                  router.push("/")
                }}
              >
                {packageData.displayName}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Page.Header>
  )
}

export default PageHeader
