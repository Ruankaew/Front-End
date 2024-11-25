"use client";
import styled from "styled-components";

const LineStyle = styled.div`
  height: 20px;
  z-index: 5;
  background: rgba(207, 152, 44, 1);
`;

export default function LineSeparator() {
    return <LineStyle />;
}
