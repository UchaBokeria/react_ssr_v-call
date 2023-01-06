import styled from 'styled-components'
import {useFormikContext} from 'formik'

const CustomButton = (props) => {
    const {submitForm} = useFormikContext()

    const handleSubmit = () => {
        submitForm()
    }
  return (
    <SubmitButton disabled={props.isSubmitting} type="button" onClick={handleSubmit}>
    {props.children}
  </SubmitButton>
  )
}

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 6px 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 40px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
`;


export default CustomButton