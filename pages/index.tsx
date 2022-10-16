import type {NextPage} from 'next'
import {Button, Container, FormControl, FormLabel, Heading, Input, Spacer, Stack} from "@chakra-ui/react";
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from "@firebase/auth";
import {useState} from "react";
import {FirebaseError} from "@firebase/app";

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onCreateUser = async () => {
    console.log(email, password)
    try {
      const auth = getAuth()
      const {user} = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(user)
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log('error', e)
      }
    }
  }

  return (
    <Container py={10}>
      <Heading>新規登録</Heading>
      <Spacer h={10}/>
      <Stack>
        <FormControl>
          <FormLabel>メールアドレス</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'}/>
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'}/>
        </FormControl>
        <Button onClick={() => onCreateUser()}>新規登録</Button>
      </Stack>
    </Container>
  )
}

export default Home
