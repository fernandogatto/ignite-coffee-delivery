import styled from 'styled-components';

export const CheckoutFormContainer = styled.div`
  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.938rem;
  }

  .message-container {
    display: flex;

    margin-bottom: 2rem;

    svg {
      margin-right: 0.5rem;
    }

    .title {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  .form-card {
    background-color: ${(props) => props.theme['gray-100']};
    padding: 2.5rem;
    border-radius: 6px;

    & + .form-card {
      margin-top: 0.75rem;
    }
  }

  .form-row {
    display: flex;
    align-items: center;
    gap: 12px;

    & + .form-row {
      margin-top: 16px;
    }
  }

  input {
    height: 42px;

    background: ${(props) => props.theme['gray-300']};
    padding: 12px;
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 4px;
  }

  #cep, #number, #neighborhood {
    width: 12.5rem;
  }

  #state {
    width: 3.75rem;
  }

  #street {
    width: 100%;
  }

  #complement, #city {
    flex: 1;
  }

  .checkbox-container {

  }
`

interface ICheckboxContainer {
  active: boolean
}

export const CheckboxContainer = styled.div<ICheckboxContainer>`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.active
    ? props.theme['purple-300']
    : props.theme['gray-300']
  };
  border: 1px solid;
  border-color: ${(props) => props.active
    ? props.theme['purple-500']
    : 'transparent'
  };

  padding: 16px;
  border-radius: 6px;
  flex: 1;
  cursor: pointer;

  input {
    display: none;
  }

  label {
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
  }

  svg {
    margin-right: 12px;
    color: ${(props) => props.theme['purple-500']};
  }
`
