import styled from 'styled-components';

export const CenterContent = styled.div`
  margin: 20px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin: 20px 0 10px 0;
  }

  form {
    label {
      margin: 10px 0;
    }

    .account {
      margin: 10px 0;
      a {
        color: #007bff;
      }
    }
  }
`;
