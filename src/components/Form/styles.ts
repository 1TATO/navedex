import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 50%;
  margin: 6rem auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 70%;
    margin: 3rem auto;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0 0 2rem 0;

    h2 {
      margin-left: 2rem;
      font-size: 2rem;

      @media (max-width: 650px) {
        font-size: 1.5rem;
      }
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem 4rem;

    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
      gap: 0 0.5rem;
    }
    
    grid-template-areas:
    "name job_role"
    "birthdate admission_date"
    "project url"
    ". button";

    position: relative;

    label {
      margin-right: auto;
    }

    input {
      width: 100%;
      min-width: 15rem;
    }

    .name {
      grid-area: name;
    }

    .job-role {
      grid-area: job_role;
    }

    .birthdate {
      grid-area: birthdate;
    }

    .admission_data {
      grid-area: admission_data;
    }

    .project {
      grid-area: project;
    }

    .url {
      grid-area: url;
    }

    button {
      position: absolute;
      grid-area: button;

      right: 0;

      width: 70%;

      @media (max-width: 650px) {
        bottom: -3rem;
        width: 100%;
      }
    }
  }
`;