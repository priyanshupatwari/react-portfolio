import { useState, useEffect } from 'react'

const useFetch = (url) => {
 const [state, setState] = useState({ data: null, loading: true })
 // if not used useEffect; then every time the parent 
 // component is rendered, this component is called
 // & the url is fetched;
 // we want to fetch the url only if the url is changed
 useEffect(() => {
  setState((prevValue) => (
   { data: prevValue.data, loading: true }
  ));
  fetch(url)
   .then(res => res.text())
   .then(res => {
    // console.log(res)
    setState({ data: res, loading: false });
   })
 }, [url, setState])
 return state;
}

export default useFetch
