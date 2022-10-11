import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { sanityClient } from '../sanity'
import { useState } from 'react'
const FeaturedRow = ({ id, title, description }) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      }
    }[0]
    `, {id}
    ).then(data => {
      setRestaurants(data?.restaurants)
    })
  }, [id])
  return (
    <View>
      <View style={styles.featuredRow}>
        <Text style={{fontWeight: 'bold', fontSize: "20"}}>{title}</Text>
        <ArrowRightIcon color="#00CC00" />
      </View>

      <Text style={{fontSize: 12, color: "lightgay", paddingHorizontal: 15 }}>{description}</Text>
    
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      style={{paddingTop: 15}}
    >
      {restaurants?.map(restaurant => {

      {/* restaurant cards */}
      <RestaurantCard 
        key={restaurant._id}
        id={1}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo! Sushi"
        rating={4.5}
        genre="japanese"
        address="123 Main Str"
        short_description="this is a test description"
        dishes={[]}
        long={20}
        lat={0}
      />
      })}
    </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({
  featuredRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
})