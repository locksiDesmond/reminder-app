import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "../components/Container";
import ReminderList from "../components/reminder-list/ReminderList";

const List = ({ route: { params }, navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <View>
          <Text style={[styles.title, { color: params?.iconColor }]}>
            {params?.title}
          </Text>
        </View>
        <ReminderList title={params?.title} />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
export default List;
