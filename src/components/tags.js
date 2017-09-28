import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  border-radius: 4px;
  width: 350px;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  overflow: hidden;

  @media (max-width: 576px) {
    border-radius: 0;
    width: 100%;
    height: 100% !important;
    top: 0;
    right: 0;
    margin: 0;
    box-shadow: none;
  }
}
`

export const Header = styled.div`
  border-bottom: 1px solid #cecece;
  min-height: 30px;
  color: #757575;
  display: flex;
`

export const Body = styled.div`
  padding: 15px 25px;

  @media (max-width: 576px) {
    padding: 10px 20px;
  }
`

export const Errors = styled.div`
  margin-top: 15px;
  padding: 0 25px;

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`

export const ErrorItem = styled.div`
  color: #d50000;
  -webkit-tap-highlight-color: transparent;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
`
