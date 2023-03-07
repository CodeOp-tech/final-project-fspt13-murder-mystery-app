const gameFetch = () => {
  const [characters, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("http://localhost:5050/characters");
      const mountains = await response.json();

      setEntries(mountains);
    };

    fetchEntries();
  }, []);

  const scotlandMountains = mountains.filter(
    (mountain) => mountain.country === "Scotland"
  );

  const englandMountains = mountains.filter(
    (mountain) => mountain.country === "England"
  );
};
