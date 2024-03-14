import { View, Text } from "react-native";
import { styles } from "./styles";
import WatchList from "@/src/components/WatchList";
import { useEffect, useState } from "react";
import { handleTrendingData } from "@/src/services/handleTrendingData";
import Trending from "@/src/components/Trending";

type Poster = {
  id: number;
  poster_path: string;
};

const Index = () => {
  const [data, setData] = useState<Poster[]>([]);

  useEffect(() => {
    handleTrendingData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOVIES LIST</Text>
      {/* <WatchList title={data} /> */}
      <Trending data={data} />
    </View>
  );
};

export default Index;
