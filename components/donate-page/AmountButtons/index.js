import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './style';

const AmountButtons = ({ changeAmount }) => {
    const router = useRouter();
    const { level } = router.query;
    const [selectedAmount, setSelectedAmount] = useState(0.01);
    const [showOther, setShowOther] = useState(false);
    const [otherAmount, setOtherAmount] = useState('$0');

    const onAmountSelection = (amount) => {
        setSelectedAmount(amount);

        if (amount === 'other') {
            setShowOther(true);
            changeAmount(0);
            return;
        }

        setOtherAmount(0);
        setShowOther(false);
        changeAmount(amount);
    };

    const onChange = (e) => {
        const numericAmount = Number(e.target.value.replace(/[ ,.$]/g, ''));

        if (
            !/^[0-9]*$/.test(numericAmount) ||
            numericAmount.toString().length < 1
        )
            return;

        const displayAmount =
            '$' + Number(numericAmount.toFixed(2)).toLocaleString();
        setOtherAmount(displayAmount);
        changeAmount(numericAmount);
    };

    useEffect(() => {
        switch (level) {
            case 'the-chateau':
                onAmountSelection(50);
                break;
            case 'the-palace':
                onAmountSelection(100);
                break;
            case 'the-castle':
                onAmountSelection(1000);
                break;
            default:
                break;
        }
    }, [level]);

    return (
        <div>
            <S.PaymentText>Select amount to see payment options</S.PaymentText>
            <S.Container>
                {amounts.map((val) => (
                    <S.AmountButton
                        key={val.amount}
                        $selected={selectedAmount === val.amount}
                        onClick={() => onAmountSelection(val.amount)}
                    >
                        {val.text}
                    </S.AmountButton>
                ))}
            </S.Container>
            {showOther && (
                <S.Form>
                    <label>Other amount</label>
                    <S.OtherAmountInput
                        type='text'
                        value={otherAmount}
                        onChange={onChange}
                        placeholder='$2000'
                    />
                </S.Form>
            )}
        </div>
    );
};

const amounts = [
    {
        amount: 50,
        text: '$50',
    },
    {
        amount: 100,
        text: '$100',
    },
    {
        amount: 1000,
        text: '$1000',
    },
    {
        amount: 'other',
        text: 'Other',
    },
];

export default AmountButtons;
