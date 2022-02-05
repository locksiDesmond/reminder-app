import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "../components/Container";
import { lists } from "../api/index";
import NoReminder from "../components/no-reminder/NoReminder";
import ReminderList from "../components/reminder-list/ReminderList";

const List = ({ route: { params }, navigation }: any) => {
  let item = lists.find((item) => item.id === params?.id);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <View>
          <Text style={[styles.title, { color: item?.iconColor }]}>
            {item?.title}
          </Text>
        </View>
        <ReminderList />
        {/* <NoReminder /> */}
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
