import { Paragraph } from '../../../styles/shared';
import InfoSection from '../../shared/InfoSection';
import * as S from './style';

export default function Home() {
    return (
        <>
            <InfoSection title='Why support us?'>
                <S.TextGrid>
                    <Paragraph>
                        Abandoned pets are companion animals that are either inadvertently or deliberately abandoned by their owners, by either dumping the animals on the streets, leaving them alone in a vacant property, or relinquishing them at an animal shelter<br />
                        <span>Save this animal with your action or donation</span>
                    </Paragraph>
                    <Paragraph>
                        What happens to animals when they get abandoned?
                        Without veterinary care, shelter and food they will sooner or later become sick and die. Animals that are not neutered when dumped, will also contribute to an already existing stray animal overpopulation; their offspring will be born into a life on the streets, fighting for their survival.
                    </Paragraph>
                </S.TextGrid>
            </InfoSection>
        </>
    );
}
