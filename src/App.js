import {useState } from 'react'

export function checkPalindrome(str) {
    str = str.toString();  // Ensure str is converted to a string
    str = str.toLowerCase();
    const reverseString = str.split('').reverse().join('');
    return str === reverseString;
}

function App() {
    const title = "Palindrome Checker";

    const [userInput, setUserInput] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        setIsPalindrome(checkPalindrome( userInput ));
    }
    

    function resetValues(e) {
        setUserInput(e.target.value)
        setIsPalindrome(null)
    }

      return (
        <div className="App">
            <div className="content">
                  <h1>{title}</h1>
                  <p>This tool will check if your input counts as a palindrome. Palindromes are strings which read the same forwards and backwards. E.g. Racecar.</p>

                  <form id="palindromeForm" >
                      <label htmlFor="textInput">Enter a string:</label>
                      <input type="text" name="userInput" id="textInput" value={userInput} onChange={(e) => resetValues(e)} />
                      <button onClick={handleClick}>Check</button>
                  </form>

                  {isPalindrome === null && <p>Please enter a string to check.</p>}
                  {isPalindrome === true && <p className="palindrome">"{userInput}" is a palindrome</p>}
                  {isPalindrome === false && <p className="not-palindrome">"{userInput}" is not a palindrome</p>}
            </div>
        </div>
      );
}

export default App;
