import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
`;

export const FormContainer = styled.div`
  width: 50%;
  margin: 6rem auto;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin: 0 0 2rem 2rem;

    h2 {
      margin-left: 2rem;
      font-size: 2rem;
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    
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

      width: 15rem;
    }
  }
`;
