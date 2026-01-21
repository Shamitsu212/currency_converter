import type { Dispatch, SetStateAction } from "react";

import Button_UI from '../Button_UI/Button_UI'
import Input_UI from '../Input_UI/Input_UI'

import styles from './Converter_UI.module.css'

interface ConverterProps {
    wallet: string;
    setWallet: Dispatch<SetStateAction<string>>;
    input: string;
    setInput: Dispatch <SetStateAction<string>>;
    disable: boolean
}

function Converter_UI({wallet, setWallet, input, setInput, disable}:ConverterProps) {

  return (
    <div className={styles.Converter}>

        <div>
            <Button_UI wallet={wallet} text="rub" setWallet={setWallet}/>
            <Button_UI wallet={wallet} text="usd" setWallet={setWallet}/>
            <Button_UI wallet={wallet} text="eur" setWallet={setWallet}/>
            <Button_UI wallet={wallet} text="kzt" setWallet={setWallet}/>
        </div>
      
        <div>
            <Input_UI value={input} setValue={setInput} disable={disable}/>
        </div>

    </div>
  )
}

export default Converter_UI