import {Button, Container, Heading, Spacer, useToast} from "@chakra-ui/react";
import {FirebaseError} from "@firebase/app";
import {getAuth, signOut} from "@firebase/auth";
import {useRouter} from "next/router";
import {pagesPath} from "../lib/$path";

export const mypage = () => {
  const toast = useToast()
  const {push} = useRouter()

  const onLogout = async () => {
    console.log('click')
    try {
      const auth = getAuth()
      await signOut(auth)
      await push(pagesPath.$url())
      toast({status: "success", title: 'ログアウトしました'})
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
        toast({status: "error", title: 'ログアウトに失敗しました'})
      }
    }
  }

  return (
    <Container py={10}>
      <Heading>マイページ</Heading>
      <Spacer h={10}/>
      <Button onClick={() => onLogout()}>ログアウト</Button>
    </Container>
  )
}

export default mypage