import React, {FC} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Catalog: FC = () => {
    const {loginData, customer} = useTypedSelector(state => state.customer)

    const {getAddresses, postAddress, putAddress, deleteAddress } = useActions.useAddressActions()
    const {getCards, postCard, putCard, deleteCard } = useActions.useCardActions()
    const {getComments, postComment, putComment, deleteComment } = useActions.useCommentActions()
    const {getCustomer, putCustomer, changePassword, deleteCustomer } = useActions.useCustomerActions()
    const {getOrders, postOrder, deleteOrder } = useActions.useOrderActions()
    const {getProducts} = useActions.useProductActions()
    const {getSizes} = useActions.useSizeActions()

    console.log(loginData)

    return (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            CATALOG

            <h1>ADDRESS</h1>
            <button onClick={() => getAddresses(customer.id, loginData)}>GET</button>
            <button onClick={() => postAddress({id: '', city: '', country: '', customersIds: [customer.id], street: ''}, loginData)}>POST</button>
            <button>PUT onClick={() => putAddress({id: '', city: '', country: '', customersIds: [customer.id], street: ''}, loginData)}</button>
            <button>DELETE onClick={() => deleteAddress('', loginData)}</button>

            <h1>CARD</h1>
            <button onClick={() => getCards(customer.id, loginData)}>GET</button>
            <button onClick={() => postCard({id: '0', cvv: '', customersIds: [customer.id], validityDate: '', number: '1', owner: ''}, loginData)}>POST</button>
            <button onClick={() => putCard({id: '0', cvv: '', customersIds: [customer.id], validityDate: '', number: '', owner: ''}, loginData)}>PUT</button>
            <button onClick={() => deleteCard('0', loginData)}>DELETE</button>

            <h1>COMMENT</h1>
            <button onClick={() => getComments('')}>GET</button>
            <button onClick={() => postComment({id: '', customerId: customer.id, productId: '', message: '', rate: 5, date: '1'}, loginData)}>POST</button>
            <button onClick={() => putComment({id: '', customerId: customer.id, productId: '', message: '', rate: 1, date: ''}, loginData)}>PUT</button>
            <button onClick={() => deleteComment('', loginData)}>DELETE</button>

            <h1>CUSTOMER</h1>
            <button onClick={() => getCustomer(customer.id)}>GET</button>
            <button onClick={() => putCustomer({...customer, phone: customer.phone.slice(1), favouritesIds: ['0', '1', '2'], inCartIds: ['0', '1', '2']}, loginData)}>PUT</button>
            <button onClick={() => changePassword({email: customer.email, oldPassword: 'olivertears', newPassword: 'olivertears'})}>CHANGE PASSWORD</button>
            <button onClick={() => deleteCustomer('', loginData)}>DELETE</button>

            <h1>ORDER</h1>
            <button onClick={() => getOrders(customer.id, loginData)}>GET</button>
            <button onClick={() => postOrder({id: '', date: '', status: '', customerEmail: customer.email, payment: '', sizesIds: ['']})}>POST</button>
            <button onClick={() => deleteOrder('', loginData)}>DELETE</button>

            <h1>PRODUCT</h1>
            <button onClick={() => getProducts()}>GET</button>

            <h1>SIZE</h1>
            <button onClick={() => getSizes('')}>GET</button>

        </div>
    );
};

export default Catalog