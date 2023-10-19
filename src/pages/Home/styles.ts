import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 0.938rem;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`

export const BannerContainer = styled.div`
  padding: 5.875rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .info-container {
    h1 {
      font-size: 3rem;
      font-weight: 800;
    }

    > p {
      font-size: 1.25rem;
    }

    .items-list-container {
      margin-top: 4.125rem;

      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2.5rem;
      row-gap: 1.25rem;

      @media (max-width: 425px) {
        grid-template-columns: 1fr;
      }
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-30px) rotate(-10deg);
    }
    100% {
      transform: translatey(0px);
    }
  }

  img {
    max-width: 476px;
    width: 100%;
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
  }
`

export const CoffeesContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3.375rem;
  }

  .coffee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(13.5rem, 1fr));
    gap: 40px 32px;
  }
`
