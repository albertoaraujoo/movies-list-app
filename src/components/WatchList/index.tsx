import { View, Text } from "react-native";
import { styles } from "./styles";
import PosterMovieCard from "../PosterMovieCard";

const WatchList = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WatchList</Text>
      <PosterMovieCard title={title} />
    </View>
  );
};

export default WatchList;
