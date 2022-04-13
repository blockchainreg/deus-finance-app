import styled from 'styled-components'
import { Card } from 'components/Card'
import { PrimaryButton } from 'components/Button'
import { Row } from 'components/Row'

export const ActionWrap = styled(Card)`
  padding: 0;
  max-height: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow2};
  min-height: 250px;
  width: 233px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
      min-width: 300px;
      max-width: 600px;
      width: 100%;
      margin: auto;
  `};
`
export const Title = styled.div`
  color: ${({ theme }) => theme.text2};
`

export const ClaimBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  margin-top: 20px;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 5px;

  & > div {
    padding: 15px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
  }
`

export const InfoHeader = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.text1};
`

export const InfoSubHeader = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.text3};
`

export const EmptyToken = styled.p`
  margin-top: 0.75rem;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.text4};
`

export const Button = styled(PrimaryButton)`
  height: 30px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 15px;
`

export const BottomRow = styled(Row)`
  flex-wrap: wrap;
  padding: 10px 10px;
  /* align-items: flex-end; */
  position: relative;
  background: ${({ theme }) => theme.bg2};
  margin-bottom: auto;
`

export const BottomWrap = styled.div`
  text-align: center;
  /* vertical-align: bottom; */
`
