





const gameFetch = () => {
  const [elements, setEntries] = useState([]);
  

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('http://localhost:5050/characters')
      const elements = await response.json();

      setEntries(elements)
    }

    fetchEntries();
  }, []);

}

  const gameCharacters = elements.filter(character => element.cha === "true") 

  const gameQuestions = elements.filter(question => element.questi === "true")