import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonBottom from "../components/button-bottom/ButtonBottom";
import Container from "../components/Container";
import MyList from "../components/my-lists/MyList";
import Search from "../components/search/Search";
import Sections from "../components/sections/Sections";
import NavigationWrapper from "../context/navigation-context";

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f1f6" }}>
      <NavigationWrapper navigation={navigation}>
        <Container>
          <Search />
          <Sections navigation={navigation} />
          <MyList navigation={navigation} />
          <ButtonBottom />
        </Container>
      </NavigationWrapper>
    </SafeAreaView>
  );
};

export default Home;
