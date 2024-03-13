import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.colors.black,
  },
  title: {
    marginTop: 44,
    color: theme.colors.yellow,
    fontSize: theme.fonts.size.heading.xl,
    fontFamily: theme.fonts.family.bold,
    textAlign: "center",
  },
});
