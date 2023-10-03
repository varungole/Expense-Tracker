import React , {useState , useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {


    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);

    const {addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount,
        }

        addTransaction(newTransaction);
    }
    return (
    <>
    <h3>Add new Transaction</h3>
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text..' />
        </div>

        <div className='form-control'>
            <label htmlFor='amount'>Amount <br /> Negative - Expense , Positive - Income</label>
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount' />
        </div>
        <button className='btn'> Add Transaction</button>
    </form>
    </>
  )
}

export default AddTransaction