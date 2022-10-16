import {Button, Container, FormControl, FormLabel, Heading, Input, Spacer, Stack} from "@chakra-ui/react"

export const signin = () => {
  return (
    <Container py={10}>
      <Heading>ログイン</Heading>
      <Spacer h={10}/>
      <Stack>
        <FormControl>
          <FormLabel>メールアドレス</FormLabel>
          <Input type={'email'}/>
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input type={'password'}/>
        </FormControl>
        <Button>ログイン</Button>
      </Stack>
    </Container>
  )
}

export default signin