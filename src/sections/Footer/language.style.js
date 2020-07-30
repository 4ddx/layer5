import styled from 'styled-components';

const LanguageWrapper = styled.section`
    .icons{
        margin: 0px
        padding-left: 15px;
        padding-right: 15px;
        .flag{
            padding:2px
        }
    }
    .title{
        color: ${props => props.theme.white};
        font-size: 24px;
        margin-bottom: 20px;
    }
`;

export default LanguageWrapper;