import React from 'react'
import useFetch from '../useFetch'
function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }
  console.log('computing longest word');
  let longestWord = '';
  arr = JSON.parse(arr);
  arr.forEach((sentence) =>
    sentence.split(' ').forEach((word) => {
      if (word.length > longestWord.length)
        longestWord = word
    })
  );
  console.log(longestWord);
  return longestWord;
}

const KanyeLongestWord = () => {
  const [state, setState] = React.useState(0)
  const { data, loading } = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json')
  
  // useMemo returns what computeLongestWord() returns ;
  // computeLongestWord(data) is called only when the `data` changes
  const longestWord = React.useMemo(() => computeLongestWord(data), [data])
  return (
    <>
      <h1>useMemo</h1>
      <h4>Kanye's longest word</h4>
      <button onClick={() => setState(state + 1)}>compute again n again {state}</button>
      {loading ? 'loading...' : longestWord}
      {/* {loading ? 'loading...' : computeLongestWord(data)} */}

    </>
  )
}

export default KanyeLongestWord

// useMeme is used to OPTIMISE ; call a heavy computing func once 
// Not every time this  component renders 