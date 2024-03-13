import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const PosterMovieCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PosterMovieCard</Text>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/original${title}` }}
      />
    </View>
  );
};

export default PosterMovieCard;
