import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import CircleCursor from "../components/CircleCursor";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorPageWrapper>
      <CircleCursor />
      <h1>이런!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorPageWrapper>
  );
}

const ErrorPageWrapper = styled.div`

`