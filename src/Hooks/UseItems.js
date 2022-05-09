import { useEffect, useState } from "react";

const UseItems = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    const url = `https://polar-wildwood-19795.herokuapp.com/items`
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])
  return [items]
}

export default UseItems;