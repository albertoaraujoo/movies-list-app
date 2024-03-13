import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.carbon,
    height: 200,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
  },
});
