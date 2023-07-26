import Link from 'next/link';
import React from 'react';
import useViewportWidth from '../../../../hooks/useViewportWidth';
import * as S from './style';

const Levels = () => {
    const width = useViewportWidth();

    if (width && width < 1200) {
        return (
            <S.Grid>
                <S.GridItem $column='2/-1'>
                    <S.Image
                        src='/assets/levels/food.jpg'
                        alt='Pet food.'
                    />
                </S.GridItem>
                <S.GridItem $column='1/2' $content $bgColor='var(--purple-2)'>
                    <S.Header>Pet food</S.Header>
                    <S.List>
                    Pet food is animal feed intended for consumption by pets. Typically sold in pet stores and supermarkets, it is usually specific to the type of animal, such as dog food or cat food. Most meat used for animals is a byproduct of the human food industry, and is not regarded as "human grade". Given the carnivorous dietary habits of many pets (especially cats and dogs), involving the consumption of an estimated fifth of the world's meat and fish, the impact of pet-food production on carbon footprints and on climate change becomes an issue.
                    </S.List>
                </S.GridItem>
                <S.GridItem $column='1/2'>
                    <S.Image
                        src='/assets/levels/house.png'
                        alt='house.'
                    />
                </S.GridItem>
                <S.GridItem $column='2/-1' $content $bgColor='var(--purple-1)'>
                    <S.Header>Shelther</S.Header>
                    <S.List>
                    Shelters are necessary to deal with the repercussions of pet overpopulation. And although they do not treat or stop the problem of unwanted pets, they do help to decrease the spread of disease as well as the risk of injuries such as bites or scratches from these stray animals, living on the edge of survival.
                    </S.List>
                </S.GridItem>
                <S.GridItem $column='2/-1'>
                    <S.Image
                        src='/assets/levels/treatment.jpg'
                        alt='The Chateau.'
                    />
                </S.GridItem>
                <S.GridItem $column='1/2' $content>
                    <S.Header>Treatment</S.Header>
                    <S.List>
                    Animal welfare means how an animal is coping with the conditions in which it lives. An animal is in a good state of welfare if (as indicated by scientific evidence) it is healthy, comfortable, well-nourished, safe, able to express innate behavior, and if it is not suffering from unpleasant states such as pain, fear, and distress. Good animal welfare requires disease prevention and veterinary treatment, appropriate shelter, management, nutrition, humane handling, and humane slaughter. 
                    </S.List>
                </S.GridItem>
            </S.Grid>
        );
    }

    return (
        <S.Grid>
            <S.GridItem $column='1/2' $content $bgColor='var(--purple-2)'>
                <S.Header>
                    {width && width < 850
                        ? 'Pet food'
                        : 'PET FOOD'}
                </S.Header>
                <S.List>
                Pet food is animal feed intended for consumption by pets. Typically sold in pet stores and supermarkets, it is usually specific to the type of animal, such as dog food or cat food. Most meat used for animals is a byproduct of the human food industry, and is not regarded as "human grade". 
                Given the carnivorous dietary habits of many pets (especially cats and dogs), involving the consumption of an estimated fifth of the world's meat and fish, the impact of pet-food production on carbon footprints and on climate change becomes an issue.
                </S.List>
            </S.GridItem>
            <S.GridItem $column='2/-1'>
                <S.Image
                    src='/assets/levels/food.jpg'
                    alt='The Castle.'
                />
            </S.GridItem>
            <S.GridItem $column='1/2'>
                <S.Image
                    src='/assets/levels/house.png'
                    alt='House.'
                />
            </S.GridItem>
            <S.GridItem $column='2/-1' $content $bgColor='var(--purple-1)'>
                <S.Header>
                    {' '}
                    {width && width < 850
                        ? 'Shelther'
                        : 'Shelther'}
                </S.Header>
                <S.List>
                Shelters are necessary to deal with the repercussions of pet overpopulation. And although they do not treat or stop the problem of unwanted pets, they do help to decrease the spread of disease as well as the risk of injuries such as bites or scratches from these stray animals, living on the edge of survival.
                </S.List>
            </S.GridItem>
            <S.GridItem $column='1/2' $content>
                <S.Header>
                    {' '}
                    {width && width < 850
                        ? 'Treatment'
                        : 'Treatment'}
                </S.Header>
                <S.List>
                Animal welfare means how an animal is coping with the conditions in which it lives. An animal is in a good state of welfare if (as indicated by scientific evidence) it is healthy, comfortable, well-nourished, safe, able to express innate behavior, and if it is not suffering from unpleasant states such as pain, fear, and distress. Good animal welfare requires disease prevention and veterinary treatment, appropriate shelter, management, nutrition, humane handling, and humane slaughter. 
                </S.List>
            </S.GridItem>
            <S.GridItem $column='2/-1'>
                <S.Image
                    src='/assets/levels/treatment.jpg'
                    alt='The Chateau.'
                />
            </S.GridItem>
        </S.Grid>
    );
};

export default Levels;
