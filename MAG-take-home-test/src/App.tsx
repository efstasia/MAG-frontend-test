import { useState } from 'react';
import './App.css';
import magLogo from './images/mag-logo.png';

const App = () => {
  const [product, setProduct] = useState<string | undefined>('');
  const [user, setUser] = useState<string | undefined>('');
  const [total, setTotal] = useState<number | undefined>(0);
  const [radioInput, setRadioInput] = useState<boolean | undefined>(false);
  const [clear, setClear] = useState<boolean | undefined>(false);
  const [productPostedToday, setProductPostedToday] = useState<
    string | undefined
  >('no');

  const initialPrice: number = 100;
  const newProductAddition: number = 25;
  const oldProductAddition: number = 35;
  const companyUserRebate: number = 5;
  const postedToday: number = 10;
  const today = new Date();

  const clearCalculator = () => {
    setTotal(0);
    // setUser(undefined);
    // setProduct(undefined);
  };

  const countSum = () => {
    if (user === 'company' && product === 'new') {
      console.log('COMPANY NEW PRODUCT');
      setTotal(initialPrice + newProductAddition - companyUserRebate);
    } else if (user === 'company' && product === 'old') {
      console.log('COMPANY OLD PRODUCT');
      setTotal(initialPrice + oldProductAddition - companyUserRebate);
    } else if (user === 'normal' && product === 'old') {
      console.log('NORMAL USER OLD PRODUCT');
      setTotal(initialPrice + oldProductAddition);
    } else if (user === 'normal' && product === 'new') {
      console.log('NORMAL USER NEW PRODUCT ');
      setTotal(initialPrice + newProductAddition);
    } else if (product === 'new' && today) {
      console.log('NEW PRODUCT POSTED TODAY');
      setTotal(initialPrice + newProductAddition - postedToday);
    }
  };

  console.log('user:', user);
  console.log('product:', product);
  console.log('posted today:', productPostedToday);
  console.log('total:', total);

  return (
    <div className='wrapper'>
      <img className='mag-logo' src={magLogo} />
      <h1>MAGical price calculator</h1>
      <div className='form-container'>
        <form onSubmit={e => e.preventDefault()}>
          <label>Choose a user type</label>
          <select
            defaultValue={'default'}
            onChange={e => setUser(e.target.value)}
          >
            <option id='userType' value='default' disabled>
              select here
            </option>

            <option id='userType' value='normal'>
              non company user
            </option>

            <option id='userType' value='company'>
              company user
            </option>
          </select>
          <label>choose product type</label>
          <select
            defaultValue={'default'}
            onChange={e => setProduct(e.target.value)}
          >
            <option disabled value='default'>
              select here
            </option>
            <option value='new'>new product</option>
            <option value='old'>old product</option>
          </select>
          <label>is it published today?</label>
          <input
            // disabled={isOldProduct}
            value='yes'
            type='radio'
            name='isPublishedToday'
            onChange={e => setProductPostedToday(e.target.value)}
          />
          yes
          <input
            value='no'
            type='radio'
            name='isPublishedToday'
            onChange={e => setProductPostedToday(e.target.value)}
          />
          no
          <button type='submit' onClick={countSum}>
            calculate sum
          </button>
          <button type='submit' onClick={clearCalculator}>
            clear
          </button>
        </form>
        <p>
          result is:
          {total}
        </p>
      </div>
    </div>
  );
};

export default App;
