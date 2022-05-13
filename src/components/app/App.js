import styles from './app.module.css'
import { Calculator } from '../calculator/Calculator';
import { Result } from '../result/Result';
import { Bill } from '../bill/Bill'
import { TipButtons } from '../tipbuttons/TipButtons'
import { NumberOfPeople } from '../people/NumberOfPeople'
import { ResetButton } from '../resetButton/ResetButton'
import { TipAmount } from '../resultNumbers/tipAmount/TipAmount'
import { Total } from '../resultNumbers/total/Total.js'
import { useState, useEffect } from 'react';
import { CustomButton } from '../customButton/CustomButton';


function App() {
  const [bill, setBill] = useState("")
  const [numberOfPeople, setNumber] = useState("");
  const [selectedButton, setSelectedButton] = useState(undefined)
  const [tipAmount, setTipAmount] = useState(undefined)
  const [tipTotal, setTipTotal] = useState(undefined)
  const [customField, setCustomField] = useState(undefined)

  const onCustomField = data => setCustomField(data.customButton);
  const onBlurBill = data => setBill(data.bill);
  const onBlurPeople = data => setNumber(data.people);
  const onButtonClicked = data => setSelectedButton(data);

  const tipAmountResult = ((Number(bill) *  (customField  === undefined ? (Number(selectedButton) / 100) :  (Number(customField) / 100))
  ) / Number(numberOfPeople)).toFixed(2);

  const tipTotalResult = ((Number(bill) / Number(numberOfPeople)) + Number(tipAmount)).toFixed(2)
  
  useEffect(() => {
    setTipAmount(() => tipAmountResult);
  }, [numberOfPeople, bill, selectedButton]);


  useEffect(() => {
    setTipTotal(() => tipTotalResult)
  }, [tipAmount]);

  function resetButtonClicked() {
    setBill("");
    setNumber("");
    setSelectedButton(undefined);
  }

  return (
    <div className={styles.mainDiv}>
      <Calculator>
        <Bill onBlurBill={onBlurBill} />
        <TipButtons onButtonClicked={onButtonClicked}>
          <CustomButton onCustomField={onCustomField} />
        </TipButtons>
        <NumberOfPeople onBlurPeople={onBlurPeople} />
      </Calculator>

      <Result>
        <TipAmount
          bill={bill}
          numberOfPeople={numberOfPeople}
          selectedButton={selectedButton}
          tipAmount={tipAmount}
        />
        <Total
          tipTotal={tipTotal}
        />
        <ResetButton
          resetButtonClicked={resetButtonClicked}
        />
      </Result>
    </div>
  );
}

export default App;
