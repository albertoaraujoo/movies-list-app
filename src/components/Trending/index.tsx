import { View, Text, ScrollView } from "react-native";
import React from "react";
import PosterMovieCard from "../PosterMovieCard";
import { styles } from "./styles";

type Poster = {
  id: number;
  poster_path: string;
};

type TrendingProps = {
  data: Poster[];
};

const Trending = ({ data }: TrendingProps) => {
  return (
    <View>
      <Text style={styles.title}>Popular in the moment:</Text>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {data ? (
          data.map((poster: Poster) => (
            <PosterMovieCard key={poster.id} poster={poster.poster_path} />
          ))
        ) : (
          <Text>loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Trending;
