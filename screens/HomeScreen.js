import { StyleSheet, View, Text , Image, ScrollView, TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsVerticalIcon, Cart, UserIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { useState } from 'react'
import sanityClient from "../sanity"
import { useEffect } from 'react'


const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `).then(data => {
      setFeaturedCategories(data)
    })
  }, [])

  
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* header */}
      <View style={styles.header}>
        <Image source={{
            url: "https://links.papareact.com/wru"
          }}
          style={styles.headerImage}
        />
        <View style={styles.h1}>
          <Text style={styles.headerText}>Deliver Now!</Text>
          <Text style={styles.headerSubtitle}>Current Location
             {/* <Cart />  */}
          </Text>
        </View>
         <UserIcon /> 
      </View>


      {/* Search */}
      <View style={styles.search}>
        <View style={styles.searchInput}>
           {/* <Search />  */}
          <TextInput 
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
         <AdjustmentsVerticalIcon color="#00CC00" /> 
      </View>

      {/* scroll view */}
      <ScrollView>
        {/* categories */}
          <Categories />

        {/* features row */}

        {featuredCategories?.map(category =>(

        <FeaturedRow 
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}

        />
        ))}
  
      </ScrollView>
    </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    paddingTop: 5
  },
    header: {
      flexDirection: 'row',
      paddingBottom: 12,
      alignItems: 'center',
      marginVertical: 16,
      marginHorizontal: 8
    },
    headerImage: {
      height: 32,
      width: 32,
      backgroundColor: "gray",
      padding: 20,
      borderRadius: 50
    },
    headerText: {
      fontWeight: 'bold',
      color: "gray",
      fontSize: 12,
      lineHeight: 16
    },
    headerSubtitle: {
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 28
    },
    h1: {
      flex: 1,
      paddingHorizontal: 10
    },
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      paddingBottom: 8,
      paddingHorizontal: 10
    },
    searchInput: {
      flexDirection: 'row',
      marginHorizontal: 15,
      backgroundColor: 'lightgray',
      padding: 10,
      flex: 1,
      borderRadius: 10
    },

  });


export default HomeScreen