import { useState } from 'react';
import './App.css';
import magLogo from './images/mag-logo.png';

const App = () => {
  const [product, setProduct] = useState<string | undefined>('');
  const [user, setUser] = useState<string | undefined>('');
  const [total, setTotal] = useState<number | undefined>(0);
  const [productPostedToday, setProductPostedToday] = useState<
    string | undefined
  >('no');

  const initialPrice: number = 100;
  const newProductAddition: number = 25;
  const oldProductAddition: number = 35;
  const companyUserRebate: number = 5;
  const postedTodayRebate: number = 10;

  const clearCalculator = () => {
    setTotal(0);
  };

  const countSum = () => {
    try {
      if (user === 'company' && product === 'new') {
        setTotal(initialPrice + newProductAddition - companyUserRebate);
      } else if (user === 'company' && product === 'old') {
        setTotal(initialPrice + oldProductAddition - companyUserRebate);
      } else if (user === 'normal' && product === 'new') {
        setTotal(initialPrice + newProductAddition);
      } else {
        setTotal(initialPrice + oldProductAddition);
      }

      if (
        user === 'normal' &&
        product === 'new' &&
        productPostedToday === 'yes'
      ) {
        setTotal(initialPrice + newProductAddition - postedTodayRebate);
      } else if (
        user === 'company' &&
        product === 'new' &&
        productPostedToday === 'yes'
      ) {
        setTotal(
          initialPrice +
            newProductAddition -
            postedTodayRebate -
            companyUserRebate
        );
      }
    } catch (err: any) {
      let message: string = 'no product or user type found';
      if (err) message = err.message;
    }
  };

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
          <label>Choose product type</label>
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
          {product === 'new' && (
            <div className='new-product-chosen'>
              <label>Was it published today?</label>
              <label htmlFor='yes'>
                <input
                  value='yes'
                  type='radio'
                  name='isPublishedToday'
                  onChange={e => setProductPostedToday(e.target.value)}
                  id='yes'
                />
                yes
              </label>
              <label htmlFor='no'>
                <input
                  value='no'
                  type='radio'
                  name='isPublishedToday'
                  onChange={e => setProductPostedToday(e.target.value)}
                  id='no'
                />
                no
              </label>
            </div>
          )}

          <div className='button-wrapper'>
            <button className='sum-button' type='submit' onClick={countSum}>
              calculate sum
            </button>
            <button
              className='clear-button'
              type='submit'
              onClick={clearCalculator}
            >
              clear total
            </button>
          </div>
        </form>
        <div className='sum-container'>
          <span> price: {initialPrice}SEK</span>
          <span>
            price addition:&nbsp;
            {product === 'new' ? newProductAddition : oldProductAddition}SEK
          </span>
          <span>
            {user === 'company'
              ? ' company user rebate: '
              : 'no company rebate available'}
            {user === 'company' ? companyUserRebate : ''}
          </span>
          <span>
            {product === 'new' && productPostedToday === 'yes'
              ? 'you get 10SEK off'
              : 'no rebate available'}
          </span>
          <span>total: {total}SEK</span>
        </div>
      </div>
    </div>
  );
};

export default App;
