import styles from './ConverterForm.module.css'

import Converter_UI from '../UI/Converter_UI/Converter_UI' 

import { useEffect, useState } from 'react'


const rates = {
  usd: 1,        
  rub: 80,       
  eur: 0.9,      
  kzt: 470       
};

function ConverterForm() {

  const [firstWallet, setFirstWallet] = useState<string>("rub")
  const [secondWallet, setSecondWallet] = useState<string>("usd")

  const [userInput, setUserInput] = useState<string>("0")
  const [result, setResult] = useState<string>("0")

  useEffect(() => {
    
    const amount = parseFloat(userInput);

    if (isNaN(amount)) {
      setResult('0');
      return;
    }

    const converted = (amount / rates[firstWallet as keyof typeof rates]) * rates[secondWallet as keyof typeof rates];

    setResult(converted.toFixed(2));
  }, [userInput, firstWallet, secondWallet])



  return (

    <form className={styles.Form}>

      <div className={styles.Form_Container}>
        <Converter_UI wallet={firstWallet} setWallet={setFirstWallet} input={userInput} setInput={setUserInput} disable={false}/>
      </div>

      <div className={styles.Form_Container}> 
        <Converter_UI wallet={secondWallet} setWallet={setSecondWallet} input={result} setInput={setResult} disable={true}/>
      </div>

    </form>
  )
}

export default ConverterForm