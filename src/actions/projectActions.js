import axios from 'axios'
import { GET_ERRORS, GET_WALLETS} from  './types'

export const createWallet = (newWallet, history) => async dispath => {

  await  axios.post('http://localhost:8080/wallet', newWallet)
        .then((res) => {
            history.push('/dashboard')

        }).catch((err) => {
            dispath({type:GET_ERRORS,payload:err.response.data})
        })

}

export const getWallets = () => async dispath => {

    await  axios.get('http://localhost:8080/wallet')
          .then((res) => {
             dispath({type:GET_WALLETS,payload:res.data})
  
          })
        }