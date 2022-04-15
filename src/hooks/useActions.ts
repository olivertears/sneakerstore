import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {AppActionCreators} from "../store/reducers/app/action-creators";
import {CustomerActionCreators} from "../store/reducers/customer/action-creators";
import {CardActionCreators} from "../store/reducers/card/action-creators";
import {CommentActionCreators} from "../store/reducers/comment/action-creators";
import {AddressActionCreators} from "../store/reducers/address/action-creators";
import {ProductActionCreators} from "../store/reducers/product/action-creators";
import {OrderActionCreators} from "../store/reducers/order/action-creators";
import {CatalogActionCreators} from "../store/reducers/catalog/action-creators";


export const useActions = {
    useAppActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(AppActionCreators, dispatch)
    },
    useCustomerActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(CustomerActionCreators, dispatch)
    },
    useCardActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(CardActionCreators, dispatch)
    },
    useCommentActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(CommentActionCreators, dispatch)
    },
    useAddressActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(AddressActionCreators, dispatch)
    },
    useProductActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(ProductActionCreators, dispatch)
    },
    useOrderActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(OrderActionCreators, dispatch)
    },
    useCatalogActions: () => {
        const dispatch = useDispatch()
        return bindActionCreators(CatalogActionCreators, dispatch)
    }
}