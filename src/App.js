import { useEffect, useRef } from "react";

function App() {
  const effectRan = useRef(false)

  useEffect(() => {
    console.log('effect ran')

    // Variation #1
    /* if (effectRan.current === false) {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()
        console.log(json)
      }

      fetchUsers()

      return () => {
        console.log('unmounted')
        effectRan.current = true
      }
    } */

    // Variation #2
    if (effectRan.current === true) {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()
        console.log(json)
      }

      fetchUsers()
    }
    return () => {
      console.log('unmounted')
      effectRan.current = true
    }
  }, [])


  return <p></p>;
}

export default App;
