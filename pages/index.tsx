import styled from "styled-components";
import { useRouter } from "next/router";

const StyledTitle = styled.h1`
  color: red;
`

export default () => {
  const router = useRouter();

  return (
    <main>
      <StyledTitle>Hello</StyledTitle>
      <button onClick={() => router.push('another-route')}>Navigate me</button>
    </main>
  )
}