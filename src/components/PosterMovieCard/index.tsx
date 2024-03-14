import { View, Image } from "react-native";
import { styles } from "./styles";

type PosterMovieCardProps = {
  poster: string;
};

const PosterMovieCard = ({ poster }: PosterMovieCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/original${poster}` }}
      />
    </View>
  );
};

export default PosterMovieCard;
