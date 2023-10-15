import { Image, StyleSheet, Text, View } from "react-native";

/**
 *
 * @param {
 *  imageUrl, String
 *  title: String
 *  author: news元
 * }props
 * @returns
 */
type Props = {
  imageUrl: any;
  title: String;
  author: String;
};

export const ListItem = (props: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: props.imageUrl }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text>{props.title}</Text>
        <Text>提供元:{props.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    gap: 10,
    margin: 2,
  },
  leftContainer: {
    width: 100,
    backgroundColor: "green",
  },
  rightContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
