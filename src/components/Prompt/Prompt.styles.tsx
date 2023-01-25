import styled from 'styled-components';

export const Container = styled.div<{show?: string}>`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: ${(props) => (props.show ? "visible" : 'hidden')};
  
`;
.modal .close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #7080af;
    clip-path: polygon(0 10%, 10% 0, 50% 40%, 89% 0, 100% 10%, 60% 50%, 100% 90%, 90% 100%, 50% 60%, 10% 100%, 0 89%, 40% 50%);
  }
  
  .modal.open {
    opacity: 1;
    visibility: visible;
  }
  .modal.open .content {
    transform: scale(1);
  }

export const Wrapper = styled.div`
    position: relative;
    padding: 10px;
    width: 400px;
    height: 300px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(112, 128, 175, 0.2) 0px 16px 24px 0px;
    transform: scale(0);
    transition: transform 300ms cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;

export const Logo = styled.img`
    width: 53px;
    height: 53px;
    object-fit: cover;
`;

export const ButtonInstance = styled.button`
    height: 60%;
    flex-basis: 27%;
    margin-bottom: 1px;
`;

export const PromptContainer = styled.div`
    width: 100%;
    background-color: #cce3c8;
    border-radius: 26px 26px 0 0;
    flex-direction: row;
    flex-basis: 91%;
    justify-content: flex-start;
    align-items: stretch;
    display: flex;
`;
export const SmallerContainer = styled.div`
    height: 100%;
    background-color: #d9d9d963;
    flex-direction: row;
    flex-basis: 100%;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 30px;
    display: flex;
`;

export const Card = styled.div`
    height: 45%;
    background-color: #eff2ee;
    border-radius: 15px;
    flex-direction: column;
    flex-basis: 87%;
    justify-content: space-around;
    align-items: stretch;
    margin-top: 3px;
    padding-left: 20px;
    padding-right: 6px;
    display: flex;
`;

export const Group = styled.img`
    width: 39px;
    height: 39px;
    object-fit: cover;
    margin-bottom: 19px;
`;

export const H3 = styled.span`
    .log-out-from-dmkg {
        margin-top: 5px;
        margin-left: 1px;
        font-size: 1rem;
        font-weight: 800;
        line-height: 24px;
    }
`;

export const H5 = styled.span`
    margin-bottom: 12px;
`;

export const ButtonContainer = styled.div`
    width: 90%;
    flex-direction: row;
    flex-basis: 16%;
    justify-content: space-between;
    align-self: center;
    align-items: stretch;
    margin-top: 2px;
    display: flex;
`;

export const ButtonCancel = styled.button`
    text-align: center;
    color: #2b8876;
    height: 100%;
    background-color: #cce3c8;
    border: none;
    border-radius: 40px;
    flex-direction: row;
    flex-basis: 41%;
    justify-content: center;
    align-items: center;
    font-family: Mulish, Arial;
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
    display: flex;
`;

export const ButtonLogout = styled.button`
    height: 100%;
    flex-basis: 46%;
`;
