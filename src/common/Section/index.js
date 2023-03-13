import { MainSection, Title, Header, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <MainSection>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <SectionBody>
            {body}
        </SectionBody>

    </MainSection>
);

export default Section;