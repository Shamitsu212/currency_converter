
import type { Dispatch, SetStateAction } from 'react';
import styles from './Input_UI.module.css'

interface InputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>
    disable: boolean
}

function Input_UI({value, setValue, disable}:InputProps) {

  return (
    <input 
        className={styles.Input}
        type='number'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disable}
    >
      
    </input>
  )
}

export default Input_UI