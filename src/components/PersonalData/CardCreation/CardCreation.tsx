import React, {Dispatch, FC, SetStateAction, useState} from 'react';
//@ts-ignore
import cl from './CardCreation.module.css'
import {ICard} from "../../../models/ICard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {cardDateValidation} from "../../../utils/validations/cardDateValidation";
import {cardNumberPattern} from "../../../utils/patterns/cardNumberPattern"
import {cardMonthPattern, cardYearPattern} from "../../../utils/patterns/cardDatePattern"
import {cardOwnerPattern} from "../../../utils/patterns/cardOwnerPattern"
import {cardPaymentSystemPattern} from "../../../utils/patterns/cardPaymentSystemPattern"
import {randomUUID} from "../../../utils/randomUUID";
import {deleteSpaces} from "../../../utils/patterns/deleteSpaces";


interface ICardCreationProps {
    setCardSettings: Dispatch<SetStateAction<ICard>>;
    cardSettings: ICard
}

const CardCreation: FC<ICardCreationProps> = ({setCardSettings, cardSettings}) => {
    const {customer, authorization} = useTypedSelector(state => state.customer)
    const {setError} = useActions.useAppActions()
    const {postCard, putCard} = useActions.useCardActions()

    const [number, setNumber] = useState<string>(deleteSpaces(cardSettings.number))
    const [owner, setOwner] = useState<string>(cardSettings.owner)
    const [month, setMonth] = useState<string>(cardSettings.validityDate.slice(0,2))
    const [year, setYear] = useState<string>(cardSettings.validityDate.slice(-2))
    const [cvv, setCvv] = useState<string>(cardSettings.cvv)

    const addCard = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const newCard: ICard = {
            id: randomUUID(),
            customersIds: [customer.id],
            number: cardNumberPattern(number),
            validityDate: `${cardMonthPattern(month)}/${cardYearPattern(year)}`,
            owner: cardOwnerPattern(owner),
            cvv: cvv,
        }
        cardDateValidation(newCard) ? postCard(newCard, authorization) : setError('The card is no longer active')
        setCardSettings({} as ICard)
    }

    const changeCard = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const changedCard: ICard = {
            id: cardSettings.id,
            customersIds: [customer.id],
            number: cardNumberPattern(number),
            validityDate: `${cardMonthPattern(month)}/${cardYearPattern(year)}`,
            owner: cardOwnerPattern(owner),
            cvv: cvv,
        }
        cardDateValidation(changedCard) ? putCard(changedCard, authorization) : setError('The card is no longer active')
        setCardSettings({} as ICard)
    }

    return (
        <div
            className={cl.wrap}
            onClick={() => setCardSettings({} as ICard)}
        >
            <form
                className={cl.content}
                onClick={(e:React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
                onSubmit={cardSettings.id === '0' ? addCard : changeCard}
            >
                <h1>Card Settings</h1>

                <div className={cl.cardImage}>
                    <img
                        src={cardPaymentSystemPattern(number)}
                        className={cl.paymentSystem}
                    />
                    <h4 className={cl.number}>{cardNumberPattern(number)}</h4>

                    <div className={cl.wrapForValidDate}>
                        <h4 className={cl.validThru}>VALID THRU</h4>
                        <h4 className={cl.validDate}>{cardMonthPattern(month)}/{cardYearPattern(year)}</h4>
                    </div>
                    <h4 className={cl.owner}>{cardOwnerPattern(owner)}</h4>
                </div>

                <input
                    required
                    minLength={16}
                    maxLength={16}

                    placeholder='CARD NUMBER'
                    value={number}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
                />
                <input
                    required

                    placeholder='OWNER'
                    value={owner}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOwner(e.target.value)}
                />

                <div className={cl.lastInputRowWrap}>
                    <input
                        required
                        maxLength={2}

                        className={cl.dateInput}
                        placeholder='MM'
                        value={month}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonth(e.target.value)}
                    />
                    <input
                        required
                        maxLength={2}

                        className={cl.dateInput}
                        placeholder='YY'
                        value={year}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
                    />
                    <input
                        required
                        minLength={3}
                        maxLength={3}

                        className={cl.cvvInput}
                        placeholder='CVV'
                        value={cvv}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^[0-9]/g, '') || [8, 37, 38, 39, 40, 46].includes(e.keyCode) || (e.ctrlKey && e.keyCode === 65) || e.preventDefault()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCvv(e.target.value)}
                    />
                </div>

                <button type='submit'>Save</button>
            </form>
        </div>
    );
};

export default CardCreation