import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.sm,
  },
});
