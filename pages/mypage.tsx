import {Button, Container, Heading, Spacer} from "@chakra-ui/react";

export const mypage = () => {
  return(
    <Container py={10}>
      <Heading>マイページ</Heading>
      <Spacer h={10} />
      <Button>ログアウト</Button>
    </Container>
  )
}

export default mypage