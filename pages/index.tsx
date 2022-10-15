import type {NextPage} from 'next'
import {Button, Container, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container py={10}>
      <Stack>
        <FormControl>
          <FormLabel>メールアドレス</FormLabel>
          <Input type={'email'}/>
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input type={'password'}/>
        </FormControl>
        <Button>新規登録</Button>
      </Stack>
    </Container>
  )
}

export default Home
