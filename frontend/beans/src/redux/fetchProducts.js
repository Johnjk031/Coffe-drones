import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './coffe/coffe-actions'

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://http://localhost:8080/api/coffe')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;