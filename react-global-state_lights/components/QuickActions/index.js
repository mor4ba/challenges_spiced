import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ turnLights }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          turnLights(false);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          turnLights(true);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
