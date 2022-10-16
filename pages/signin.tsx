import {Button, Container, FormControl, FormLabel, Heading, Input, Spacer, Stack, useToast} from "@chakra-ui/react"
import {useState} from "react";
import {FirebaseError} from "@firebase/app";
import {getAuth, signInWithEmailAndPassword} from "@firebase/auth";

export const signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()

  const onSignin = async () => {
    console.log(email, password)
    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
      toast({status: "success", title: 'ログインしました'})
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
        toast({status: "error", title: 'ログインに失敗しました'})
      }
    }
  }

  return (
    <Container py={10}>
      <Heading>ログイン</Heading>
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
        <Button onClick={() => onSignin()}>ログイン</Button>
      </Stack>
    </Container>
  )
}

export default signin