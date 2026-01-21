import type { Dispatch, SetStateAction } from 'react';

import styles from './Button_UI.module.css'


interface ButtonProps {
    wallet: string;
    text: string;
    setWallet: Dispatch<SetStateAction<string>>;
}


function Button_UI({wallet, text, setWallet}:ButtonProps) {

    

  return (
    <button 
        className={styles.Button}
        disabled={wallet == text}
        onClick={() => setWallet(text)}
    >
      {text}
    </button>
  )
}

export default Button_UI