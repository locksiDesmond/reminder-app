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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f1f6" }}>
      <Container>
        <Search />
        <Sections navigation={navigation} />
        <MyList navigation={navigation} />
        <ButtonBottom />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
