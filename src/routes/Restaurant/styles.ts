import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    padding: 23px 46px 23px 30px;
  }
  `;


export const Banner = styled.div`
  position: relative;
  width: 100%;
  
  @media (min-width: 960px) {
    margin-top: 12px;
    
  }

  > a {
    position: absolute;
    z-index: 10000;
    top: 20px;
    left: 20px;
 
    @media (min-width: 960px) {
      display: none;
    }
  }

  > img {
    width: 100%;
    filter: brightness(0.8);
    
    @media (min-width: 960px) {
      border-radius: 4px;    
  }
  }
`;
export const HeaderMerchant = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 5% 0 4%;
  flex: 1 1;

  > img {
    width: 75px;
    height:75px;
    margin: 0 30px;

    @media (max-width: 375px) {
      width: 60px;
      height: 60px;
    }
  }
`;
export const MerchantContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  flex: 1 1;

  > h1 {
    font-weight: 400;
    letter-spacing: -1px;

    line-height: 44px;
    color: #3e3e3e;
    
    @media (max-width: 750px) {
      font-size: 1.1rem;
      line-height: 20px;
    }
  }
  #verify {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 450px) {
      display: none;
    }
  }
`;
export const VerifyIcon = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  margin-right: 30px;

  @media (max-width: 450px) {
      display: none;
    }

  > svg {
    position: absolute;
  }
`;
export const RateContainer = styled.div`
  font-weight: bold;
  color: #fcbb00;
  fill: #fcbb00;
`;

export const MerchantDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: unset;

  @media (max-width: 450px) {
      display: none;
    }
`
export const MoreButton = styled.button`
  font-size: 0.9em;
  font-weight: 600;
  color: #ea1d2c;
`

export const MinimumOrder = styled.div`
display: flex;
  align-items: center;
  border-left: 1px solid #a6a6a5;
  margin-left: 20px;
  padding-left: 20px;
  font-size: 12px;

  @media (max-width: 540px) {
      display: none;
    }
  `
export const DollarSign = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background-color: #a6a6a5;
`
export const Separation = styled.div`
  margin-top: 30px;
  width: 100vw;
  height: 60px;
  background-color: #f2f2f2;
`
export const Products = styled.ul`
  display: grid;
  grid-template-columns: repeat(2,minmax(320px,1fr));
  padding: 20px 0;
  grid-gap: 30px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`