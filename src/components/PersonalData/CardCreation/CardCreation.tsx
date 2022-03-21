import React, {Dispatch, FC, SetStateAction, useState} from 'react';
//@ts-ignore
import cl from './CardCreation.module.css'
import {monthPattern, yearPattern, numberPattern, paymentSystemPattern, ownerPattern} from "../../../utils/patterns";
import {ICard} from "../../../models/ICard";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {cardValidation} from "../../../utils/validations";
import {useActions} from "../../../hooks/useActions";

interface ICardCreationProps {
    setIsCardSettings: Dispatch<SetStateAction<boolean>>;
}

const CardCreation: FC<ICardCreationProps> = ({setIsCardSettings}) => {
    const {customer} = useTypedSelector(state => state.customer)
    const {setError} = useActions()

    const [number, setNumber] = useState<string>('')
    const [owner, setOwner] = useState<string>('')
    const [month, setMonth] = useState<string>('')
    const [year, setYear] = useState<string>('')
    const [cvv, setCvv] = useState<string>('')

    const postCard = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const newCard: ICard = {
            id: Date.now().toString(),
            customerId: customer.id,
            number: numberPattern(number),
            validityDate: `${monthPattern(month)}/${yearPattern(year)}`,
            owner: ownerPattern(owner),
            cvv: Number(cvv),
        }
        //console.log(newCard)
        cardValidation(newCard) ? console.log('Everything is good') : setError('The card is no longer active')
        setIsCardSettings(false)
    }


    return (
        <div
            className={cl.wrap}
            onClick={() => setIsCardSettings(false)}
        >
            <form
                className={cl.content}
                onClick={(e:React.MouseEvent<HTMLFormElement>) => e.stopPropagation()}
                onSubmit={postCard}
            >
                <h1>Card Settings</h1>

                <div className={cl.cardImage}>
                    <img
                        src={paymentSystemPattern(number)}
                        className={cl.paymentSystem}
                    />
                    <h4 className={cl.number}>{numberPattern(number)}</h4>

                    <div className={cl.wrapForValidDate}>
                        <h4 className={cl.validThru}>VALID THRU</h4>
                        <h4 className={cl.validDate}>{monthPattern(month)}/{yearPattern(year)}</h4>
                    </div>
                    <h4 className={cl.owner}>{ownerPattern(owner)}</h4>
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