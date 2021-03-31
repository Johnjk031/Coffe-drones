import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';

const url = "/http://localhost:8080/api/coffe"

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
        }
            dispatch(fetchProductsSuccess(res.products))
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

console.log(res.products)
export default fetchProducts;
