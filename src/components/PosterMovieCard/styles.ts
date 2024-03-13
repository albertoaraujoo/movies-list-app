import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.red,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.heading.sm,
    fontFamily: theme.fonts.family.bold,
  },
  poster: {
    width: 150,
    height: 220,
    transform: [{ scale: 0.8 }],
  },
});
