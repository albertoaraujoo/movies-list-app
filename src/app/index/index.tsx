import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import WatchList from "@/src/components/WatchList";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDZiZGRiZDhlNzBjNzBkNGZiMmI5MThlZWM0N2Q5OSIsInN1YiI6IjY1ZjBlYzc2NDcwZWFkMDE2MjliMjdlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nsHRNeHjj8zuMGIzb8urmAuwkcacOFwmb_cED4mUT-k",
        },
      };

      const data = fetch(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response.results[0].poster_path))
        .catch((err) => console.error(err));
    };

    fetchData();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOVIES LIST</Text>
      <WatchList title={data} />
    </View>
  );
};

export default Index;
