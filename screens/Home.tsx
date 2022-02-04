import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonBottom from "../components/button-bottom/ButtonBottom";
import Container from "../components/Container";
import MyList from "../components/my-lists/MyList";
import Search from "../components/search/Search";
import Sections from "../components/sections/Sections";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eeeeee" }}>
      <Container>
        <Search />
        <Sections navigation={navigation} />
        <MyList navigation={navigation} />
        <ButtonBottom />
        <Icon name="flag" size={26} color="white" />
        <Icon name="calendar" size={26} color="white" />
        <FeatherIcon name={"file-plus"} size={18} color="white" />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
