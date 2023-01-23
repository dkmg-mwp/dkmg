import styled from 'styled-components';

export const Container = styled.div`
    color: #2b8872;
    width: 100%;
    height: 100%;
    background-color: #fff;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    font-family: Mulish, Arial;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 21px;
    display: flex;
`;

export const Wrapper = styled.div`
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: flex;
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
