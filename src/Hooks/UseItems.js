import { useEffect, useState } from "react";

const UseItems = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/items`
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])
  return [items]
}

export default UseItems;