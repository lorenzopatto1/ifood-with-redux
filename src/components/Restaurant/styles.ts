import { styled } from 'styled-components';

export const RestaurantOptionContainer = styled.button`
  width: 262px;
  height: 112px;
  padding: 20px;
  border: 1px solid rgb(242, 242, 242);
  border-radius: 6%;
  transition: all 0.2s linear 0s;
  
  &:hover {
    width: 264px;
    height: 114px;
    box-shadow: 0px 0px 8px #dcdcdc;
    img {
      width: 73px;
      height: 73px;
    }
  }
  `

export const RestaurantInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  `
export const Logo = styled.div`
  img {
    width: 71px;
    height: 71px;
    transition: all 0.2s linear 0s;
  }
  `
export const Container = styled.div`
  
`

export const Banner = styled.div`
`
export const HeaderMerchant = styled.div`
`
export const MerchantContent = styled.div`

  span {
    position: relative;
    /* top: 0; */
    /* z-index: 0; */
  }
  svg {
    position: absolute;
    top: 10;
    left: 0;
    /* z-index: -1; */
  }

`